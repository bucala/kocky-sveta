import React, { useMemo, useState, useCallback } from 'react';
import { Crown } from 'lucide-react';

const PLAYER_COLORS = ['#d4b86a','#e07070','#7eb8e0','#7ede9a','#e0a870','#b07ee0','#e0d870','#70e0d4'];

export function ProgressChart({ tournament, totals, target }) {
  if (!tournament || !Array.isArray(tournament.players)) return null;
  const { players, rounds } = tournament;
  const [tooltip, setTooltip] = useState(null);

  const data = useMemo(() => {
    const series = [];
    const cumulative = players.map(() => 0);
    series.push({ kolo: 0, ...players.reduce((acc, p, i) => ({ ...acc, [`p${i}`]: 0 }), {}) });
    rounds.forEach((round, rIdx) => {
      round.forEach((v, pIdx) => { if (typeof v === 'number') cumulative[pIdx] += v; });
      const point = { kolo: rIdx + 1 };
      players.forEach((_, i) => { point[`p${i}`] = cumulative[i]; });
      series.push(point);
    });
    return series;
  }, [players, rounds]);

  const ranked = players
    .map((name, i) => ({ name, total: totals[i], i, color: PLAYER_COLORS[i % PLAYER_COLORS.length] }))
    .sort((a, b) => b.total - a.total);

  const W = 600, H = 260, ML = 48, MR = 16, MT = 20, MB = 28;
  const gW = W - ML - MR, gH = H - MT - MB;
  const yMax = Math.max(target, ...totals) + 200;
  const yMin = Math.min(0, ...totals) - 100;
  const yRange = yMax - yMin;
  const xCount = data.length - 1 || 1;
  const px = (i) => ML + (i / xCount) * gW;
  const py = (v) => MT + gH - ((v - yMin) / yRange) * gH;

  const yTicks = useMemo(() => {
    const step = Math.pow(10, Math.floor(Math.log10(yRange / 4)));
    const nice = [1,2,5,10].map(f => f*step).find(s => yRange/s <= 8) || step;
    const ticks = [];
    for (let v = Math.ceil(yMin/nice)*nice; v <= yMax; v += nice) ticks.push(v);
    return ticks;
  }, [yMin, yMax, yRange]);

  const fmtY = (v) => v>=1000?`${(v/1000).toFixed(v%1000===0?0:1)}k`:v<-999?`-${(Math.abs(v)/1000).toFixed(1)}k`:String(v);
  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = (e.clientX-rect.left)*(W/rect.width)-ML;
    const idx = Math.round((mx/gW)*xCount);
    if (idx>=0 && idx<data.length) setTooltip({ idx });
  }, [data, xCount]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-1.5">
        {ranked.map((p, idx) => (
          <div key={p.i} className="flex items-center gap-2 p-2 rounded-sm border border-amber-900/25 bg-stone-950/30">
            <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: p.color }} />
            <div className="ks-display ks-cream text-sm font-semibold truncate flex-1">
              {idx===0 && p.total>0 && <Crown size={11} className="ks-gold inline mr-1 -mt-0.5" />}
              {p.name}
            </div>
            <div className={`ks-display text-sm font-bold ${p.total<0?'ks-text-accent':'ks-gold'}`}>
              {p.total.toLocaleString('sk-SK')}
            </div>
          </div>
        ))}
      </div>
      <div className="ks-card rounded-sm p-3">
        <svg viewBox={`0 0 ${W} ${H}`} style={{width:'100%',height:280,overflow:'visible'}}
          onMouseMove={handleMouseMove} onMouseLeave={()=>setTooltip(null)}>
          {yTicks.map(v=>(
            <g key={v}>
              <line x1={ML} x2={ML+gW} y1={py(v)} y2={py(v)} stroke="rgba(201,168,92,0.12)" strokeDasharray="2 4"/>
              <text x={ML-4} y={py(v)+4} textAnchor="end" fontSize={9} fill="#a89679">{fmtY(v)}</text>
            </g>
          ))}
          {data.map((d,i)=>(
            <text key={i} x={px(i)} y={MT+gH+14} textAnchor="middle" fontSize={9} fill="#a89679">{d.kolo}</text>
          ))}
          <text x={ML+gW/2} y={H-2} textAnchor="middle" fontSize={9} fill="#a89679">Kolo</text>
          {yMin<0&&yMax>0&&<line x1={ML} x2={ML+gW} y1={py(0)} y2={py(0)} stroke="rgba(201,168,92,0.2)"/>}
          <line x1={ML} x2={ML+gW} y1={py(target)} y2={py(target)} stroke="#d4b86a" strokeDasharray="4 4" strokeWidth={1.5}/>
          <text x={ML+gW-4} y={py(target)-5} textAnchor="end" fontSize={9} fill="#d4b86a">Cieľ {target.toLocaleString('sk-SK')}</text>
          {players.map((_,i)=>{
            const pts=data.map((d,j)=>`${px(j)},${py(d[`p${i}`])}`).join(' ');
            return (
              <g key={i}>
                <polyline points={pts} fill="none" stroke={PLAYER_COLORS[i%PLAYER_COLORS.length]} strokeWidth={2} strokeLinejoin="round"/>
                {data.map((d,j)=>(<circle key={j} cx={px(j)} cy={py(d[`p${i}`])} r={2.5} fill={PLAYER_COLORS[i%PLAYER_COLORS.length]}/>))}
              </g>
            );
          })}
          {tooltip&&(
            <>
              <line x1={px(tooltip.idx)} x2={px(tooltip.idx)} y1={MT} y2={MT+gH} stroke="rgba(212,184,106,0.3)" strokeWidth={1}/>
              {players.map((_,i)=>(<circle key={i} cx={px(tooltip.idx)} cy={py(data[tooltip.idx][`p${i}`])} r={5} fill={PLAYER_COLORS[i%PLAYER_COLORS.length]} stroke="#0e0c0a" strokeWidth={2}/>))}
            </>
          )}
        </svg>
        {tooltip&&data[tooltip.idx]&&(()=>{
          const d=data[tooltip.idx];
          const sorted=players.map((name,i)=>({name,val:d[`p${i}`],color:PLAYER_COLORS[i%PLAYER_COLORS.length]})).sort((a,b)=>b.val-a.val);
          return (
            <div className="ks-card rounded-sm p-2.5 mt-2" style={{background:'rgba(20,16,12,0.97)',maxWidth:200}}>
              <div className="ks-mono ks-gold text-xs mb-1.5">KOLO {d.kolo}</div>
              <div className="space-y-0.5">
                {sorted.map((e,i)=>(
                  <div key={i} className="flex items-center gap-2 text-xs ks-body">
                    <span style={{width:10,height:2,background:e.color,display:'inline-block'}}/>
                    <span className="ks-cream flex-1">{e.name}</span>
                    <span className="ks-display ks-gold font-semibold">{e.val.toLocaleString('sk-SK')}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })()}
      </div>
      {data.length<=1&&<div className="ks-muted text-xs italic text-center">Graf sa naplní po prvom kole.</div>}
    </div>
  );
}
