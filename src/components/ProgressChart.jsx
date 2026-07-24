import React, { useMemo, useState, useCallback } from 'react';
import { Crown } from 'lucide-react';

const PLAYER_COLORS = ['#d4b86a','#e07070','#7eb8e0','#7ede9a','#e0a870','#b07ee0','#e0d870','#70e0d4'];

export function ProgressChart({ tournament, totals, target, fullscreen = false }) {
  if (!tournament || !Array.isArray(tournament.players) || !Array.isArray(tournament.rounds)) return null;
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

  const W = fullscreen ? 900 : 600, H = fullscreen ? 420 : 260;
  const ML = fullscreen ? 64 : 48, MR = fullscreen ? 24 : 16, MT = fullscreen ? 28 : 20, MB = fullscreen ? 40 : 28;
  const gW = W - ML - MR, gH = H - MT - MB;
  const yMax = Math.max(target, ...totals) + 200;
  const yMin = Math.min(0, ...totals) - 100;
  const yRange = yMax - yMin;
  const xCount = data.length - 1 || 1;
  const px = (i) => ML + (i / xCount) * gW;
  const py = (v) => MT + gH - ((v - yMin) / yRange) * gH;
  const axisFont = fullscreen ? 15 : 9;
  const strokeW = fullscreen ? 3 : 2;
  const dotR = fullscreen ? 4 : 2.5;
  const chartCssHeight = fullscreen ? 'min(56vh, 620px)' : 280;

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
      <div className={`grid ${fullscreen ? 'grid-cols-1 sm:grid-cols-2 gap-3' : 'grid-cols-2 gap-1.5'}`}>
        {ranked.map((p, idx) => (
          <div key={p.i} className={`flex items-center gap-2 rounded-sm border border-amber-900/25 bg-stone-950/30 min-w-0 ${fullscreen ? 'p-4' : 'p-2'}`}>
            <div className={`rounded-full shrink-0 ${fullscreen ? 'w-4 h-4' : 'w-2.5 h-2.5'}`} style={{ background: p.color }} />
            <div className={`ks-display ks-cream font-semibold truncate min-w-0 flex-1 ${fullscreen ? 'text-xl sm:text-3xl' : 'text-sm'}`}>
              {idx===0 && p.total>0 && <Crown size={fullscreen ? 20 : 11} className="ks-gold inline mr-1 -mt-0.5 shrink-0" />}
              {p.name}
            </div>
            <div className={`ks-display font-bold shrink-0 ${p.total<0?'ks-text-accent':'ks-gold'} ${fullscreen ? 'text-xl sm:text-3xl' : 'text-sm'}`}>
              {p.total.toLocaleString('sk-SK')}
            </div>
          </div>
        ))}
      </div>
      <div className={`ks-card rounded-sm ${fullscreen ? 'p-4 sm:p-6 ks-border-accent border-2' : 'p-3'}`}>
        <svg viewBox={`0 0 ${W} ${H}`} style={{width:'100%',height:chartCssHeight,overflow:'visible'}}
          onMouseMove={handleMouseMove} onMouseLeave={()=>setTooltip(null)}>
          {yTicks.map(v=>(
            <g key={v}>
              <line x1={ML} x2={ML+gW} y1={py(v)} y2={py(v)} stroke="rgba(201,168,92,0.12)" strokeDasharray="2 4"/>
              <text x={ML-4} y={py(v)+4} textAnchor="end" fontSize={axisFont} fill="#a89679">{fmtY(v)}</text>
            </g>
          ))}
          {data.map((d,i)=>(
            <text key={i} x={px(i)} y={MT+gH+16} textAnchor="middle" fontSize={axisFont} fill="#a89679">{d.kolo}</text>
          ))}
          <text x={ML+gW/2} y={H-2} textAnchor="middle" fontSize={axisFont} fill="#a89679">Kolo</text>
          {yMin<0&&yMax>0&&<line x1={ML} x2={ML+gW} y1={py(0)} y2={py(0)} stroke="rgba(201,168,92,0.2)"/>}
          <line x1={ML} x2={ML+gW} y1={py(target)} y2={py(target)} stroke="#d4b86a" strokeDasharray="4 4" strokeWidth={strokeW*0.75}/>
          <text x={ML+gW-4} y={py(target)-5} textAnchor="end" fontSize={axisFont} fill="#d4b86a">Cieľ {target.toLocaleString('sk-SK')}</text>
          {players.map((_,i)=>{
            const pts=data.map((d,j)=>`${px(j)},${py(d[`p${i}`])}`).join(' ');
            return (
              <g key={i}>
                <polyline points={pts} fill="none" stroke={PLAYER_COLORS[i%PLAYER_COLORS.length]} strokeWidth={strokeW} strokeLinejoin="round"/>
                {data.map((d,j)=>(<circle key={j} cx={px(j)} cy={py(d[`p${i}`])} r={dotR} fill={PLAYER_COLORS[i%PLAYER_COLORS.length]}/>))}
              </g>
            );
          })}
          {tooltip&&(
            <>
              <line x1={px(tooltip.idx)} x2={px(tooltip.idx)} y1={MT} y2={MT+gH} stroke="rgba(212,184,106,0.3)" strokeWidth={1}/>
              {players.map((_,i)=>(<circle key={i} cx={px(tooltip.idx)} cy={py(data[tooltip.idx][`p${i}`])} r={dotR*1.8} fill={PLAYER_COLORS[i%PLAYER_COLORS.length]} stroke="#0e0c0a" strokeWidth={2}/>))}
            </>
          )}
        </svg>
        {tooltip&&data[tooltip.idx]&&(()=>{
          const d=data[tooltip.idx];
          const sorted=players.map((name,i)=>({name,val:d[`p${i}`],color:PLAYER_COLORS[i%PLAYER_COLORS.length]})).sort((a,b)=>b.val-a.val);
          return (
            <div className={`ks-card rounded-sm mt-2 ${fullscreen ? 'p-4' : 'p-2.5'}`} style={{background:'rgba(20,16,12,0.97)',maxWidth: fullscreen ? 320 : 200}}>
              <div className={`ks-mono ks-gold mb-1.5 ${fullscreen ? 'text-base' : 'text-xs'}`}>KOLO {d.kolo}</div>
              <div className="space-y-0.5">
                {sorted.map((e,i)=>(
                  <div key={i} className={`flex items-center gap-2 ks-body ${fullscreen ? 'text-base' : 'text-xs'}`}>
                    <span style={{width: fullscreen ? 16 : 10, height: fullscreen ? 3 : 2, background:e.color, display:'inline-block'}}/>
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
