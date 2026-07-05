import React, { createContext, useContext } from 'react';

export const LANGS = ['sk', 'en'];

const T = {
  sk: {
    // Spoločné
    back: 'Späť',
    save: 'Uložiť',
    cancel: 'Zrušiť',
    close: 'Zatvoriť',
    add: 'Pridať',
    remove: 'Odstrániť',
    confirm: 'Potvrdiť',
    edit: 'Upraviť',
    start: 'Začať',

    // Hlavné menu
    'menu.founded': '★ FOUNDED 2026 by Marcel ★',
    'menu.resume': 'POKRAČOVAŤ V TURNAJI',
    'menu.new': 'Nový turnaj',
    'menu.new.sub': 'Začať novú hru až pre šesť hráčov',
    'menu.new.disabled': 'Najprv ukonči prebiehajúci turnaj',
    'menu.archive': 'Archív turnajov',
    'menu.stats': 'Štatistiky hráčov',
    'menu.stats.sub': 'Výhry, úspešnosť, rekordy',
    'menu.scan': 'Sken tabuľky',
    'menu.scan.sub': 'Odfotiť ručnú tabuľku → archív',
    'menu.rules': 'Pravidlá hry',
    'menu.rules.sub': 'Bodovanie a kombinácie kociek',
    'menu.settings': 'Nastavenia',
    'menu.settings.sub': 'Pravidlá, export, editácia archívu',

    // Nový turnaj
    'newt.title': 'Nový turnaj',
    'newt.target': 'CIEĽ HRY',
    'newt.count': 'POČET HRÁČOV',
    'newt.selected': 'VYBRANÍ HRÁČI',
    'newt.list': 'ZOZNAM HRÁČOV',
    'newt.slot.empty': 'Vyber hráča nižšie…',
    'newt.input.placeholder': 'Meno nového hráča',
    'newt.remove.tip': 'Odstrániť zo zoznamu',
    'newt.start': 'Začať turnaj',
    'newt.no.players': 'Žiadni hráči. Pridaj prvého hráča.',

    // Hra
    'game.round': 'KOLO',
    'game.target': 'CIEĽ',
    'game.player': 'HRÁČ',
    'game.score': 'AKTUÁLNE SKÓRE',
    'game.turn': 'NA ŤAHU',
    'game.dash': 'Čiarka',
    'game.abort': 'ZRUŠIŤ',
    'game.menu': 'Menu',
    'game.standings': 'Poradie',
    'game.observer': 'POZOROVATEĽ · ŽIVÝ PREHĽAD SKÓRE',
    'game.winner': 'VÍŤAZ',
    'game.draw': 'REMÍZA',
    'game.custom': 'Vlastná hodnota…',

    // Nastavenia
    'settings.title': 'Nastavenia',
    'settings.online': 'Online miestnosť',
    'settings.online.sub': 'Synchronizácia hry, archívu a skinu cez Firebase',
    'settings.rules.section': 'PRAVIDLÁ A HODNOTY HRY',
    'settings.rules': 'Úprava pravidiel',
    'settings.visual.section': 'VIZUÁL, ZVUKY A SKINY',
    'settings.viewmode': 'Režim zobrazenia hry',
    'settings.funnymode': 'Štýl oznámení',
    'settings.funnymode.sub': 'Fullscreen funny okná, malé popupy alebo potlačený režim',
    'settings.funnymode.standard': 'Štandardný',
    'settings.funnymode.simplified': 'Zjednodušený',
    'settings.funnymode.suppressed': 'Potlačený',
    'settings.visual': 'Vizuál, Zvuky a Skiny',
    'settings.visual.sub': 'Farby, písmo a vzhľad aplikácie',
    'settings.archive.section': 'SPRÁVA TURNAJOV',
    'settings.export': 'Export do Excelu',
    'settings.import': 'Import z Excelu',
    'settings.import.sub': 'Pridá turnaje z .xlsx súboru do archívu',
    'settings.edit.archive': 'Editácia archívu',
    'settings.edit.archive.sub': 'Otvor turnaj a klepni „Upraviť" — body, víťaza, kolá',
    'settings.scan': 'Sken tabuľky',
    'settings.scan.sub': 'Odfotiť ručnú tabuľku a importovať do archívu',
    'settings.admin': 'Admin nastavenia',
    'settings.admin.sub': 'Interné nastavenia · debug · override · diagnostika',
    'settings.danger': 'NEBEZPEČNÁ ZÓNA',
    'settings.clear': 'Vymazať všetky dáta',

    // Vizuál
    'visual.title': 'Vizuál, Zvuky a Skiny',
    'visual.sound.section': 'ZVUKOVÉ EFEKTY',
    'visual.sound.on': 'Zvuky zapnuté',
    'visual.sound.off': 'Zvuky vypnuté',
    'visual.haptic.on': 'Haptická odozva (vibrácie) zapnutá',
    'visual.haptic.off': 'Haptická odozva (vibrácie) vypnutá',
    'visual.anim.section': 'ANIMÁCIE',
    'visual.anim.on': 'Animácie zapnuté',
    'visual.anim.off': 'Animácie vypnuté',
    'visual.ext.section': 'ROZŠÍRENIA',
    'visual.ext.hint': '— defaultne vypnuté',
    'visual.skins.section': 'SKINY',
    'visual.font.section': 'PÍSMO',
    'visual.lang.section': 'JAZYK',

    // Rozšírenia
    'ext.confetti': 'Konfety pri výhre',
    'ext.confetti.sub': 'Farebná sprcha konfiet po víťazstve',
    'ext.dramaticWinner': 'Dramatický výsledok',
    'ext.dramaticWinner.sub': 'Animovaný nástup víťaza s efektom',
    'ext.coloredAvatars': 'Farebné avatary',
    'ext.coloredAvatars.sub': 'Každý hráč má farbu a iniciálky',
    'ext.leaderGlow': 'Pulzujúci líder',
    'ext.leaderGlow.sub': 'Zlatý glow pre hráča na 1. mieste',
    'ext.progressBar': 'Progress bar k cieľu',
    'ext.progressBar.sub': 'Vizuálna lišta napĺňajúca sa k cieľu',
    'ext.animatedScore': 'Animované skóre',
    'ext.animatedScore.sub': 'Čísla sa rozbehajú pri každom zápise',
    'ext.milestoneFlash': 'Záblesk míľnika',
    'ext.milestoneFlash.sub': 'Flash pri prekročení 1 000, 2 000…',
    'ext.turnNotification': 'Popup "Na rade"',
    'ext.turnNotification.sub': 'Toast správa pri zmene hráča v online hre',

    // Míľnik flash
    'milestone.label': 'MÍĽNIK',

    // Online stav
    'online.connected': 'Online',
    'online.offline': 'Offline',
    'online.error': 'Chyba',
  },

  en: {
    // Common
    back: 'Back',
    save: 'Save',
    cancel: 'Cancel',
    close: 'Close',
    add: 'Add',
    remove: 'Remove',
    confirm: 'Confirm',
    edit: 'Edit',
    start: 'Start',

    // Main menu
    'menu.founded': '★ FOUNDED 2026 by Marcel ★',
    'menu.resume': 'CONTINUE TOURNAMENT',
    'menu.new': 'New Tournament',
    'menu.new.sub': 'Start a new game for up to six players',
    'menu.new.disabled': 'Finish the current tournament first',
    'menu.archive': 'Tournament Archive',
    'menu.stats': 'Player Statistics',
    'menu.stats.sub': 'Wins, success rate, records',
    'menu.scan': 'Scan Table',
    'menu.scan.sub': 'Photo of handwritten table → archive',
    'menu.rules': 'Game Rules',
    'menu.rules.sub': 'Scoring and dice combinations',
    'menu.settings': 'Settings',
    'menu.settings.sub': 'Rules, export, archive editing',

    // New tournament
    'newt.title': 'New Tournament',
    'newt.target': 'TARGET SCORE',
    'newt.count': 'NUMBER OF PLAYERS',
    'newt.selected': 'SELECTED PLAYERS',
    'newt.list': 'PLAYER LIST',
    'newt.slot.empty': 'Select a player below…',
    'newt.input.placeholder': 'New player name',
    'newt.remove.tip': 'Remove from list',
    'newt.start': 'Start Tournament',
    'newt.no.players': 'No players. Add the first one.',

    // Game
    'game.round': 'ROUND',
    'game.target': 'TARGET',
    'game.player': 'PLAYER',
    'game.score': 'CURRENT SCORE',
    'game.turn': 'ACTIVE',
    'game.dash': 'Pass',
    'game.abort': 'QUIT',
    'game.menu': 'Menu',
    'game.standings': 'Standings',
    'game.observer': 'OBSERVER · LIVE SCORE VIEW',
    'game.winner': 'WINNER',
    'game.draw': 'DRAW',
    'game.custom': 'Custom value…',

    // Settings
    'settings.title': 'Settings',
    'settings.online': 'Online Room',
    'settings.online.sub': 'Sync game, archive and skin via Firebase',
    'settings.rules.section': 'GAME RULES & VALUES',
    'settings.rules': 'Edit Rules',
    'settings.visual.section': 'VISUAL, SOUND & SKINS',
    'settings.viewmode': 'Game Display Mode',
    'settings.funnymode': 'Notification Style',
    'settings.funnymode.sub': 'Fullscreen popups, compact or suppressed mode',
    'settings.funnymode.standard': 'Standard',
    'settings.funnymode.simplified': 'Simplified',
    'settings.funnymode.suppressed': 'Suppressed',
    'settings.visual': 'Visual, Sound & Skins',
    'settings.visual.sub': 'Colors, font and app appearance',
    'settings.archive.section': 'TOURNAMENT MANAGEMENT',
    'settings.export': 'Export to Excel',
    'settings.import': 'Import from Excel',
    'settings.import.sub': 'Adds tournaments from .xlsx file to archive',
    'settings.edit.archive': 'Edit Archive',
    'settings.edit.archive.sub': 'Open tournament and tap "Edit" — scores, winner, rounds',
    'settings.scan': 'Scan Table',
    'settings.scan.sub': 'Photo of handwritten table, import to archive',
    'settings.admin': 'Admin Settings',
    'settings.admin.sub': 'Internal settings · debug · override · diagnostics',
    'settings.danger': 'DANGER ZONE',
    'settings.clear': 'Clear All Data',

    // Visual
    'visual.title': 'Visual, Sound & Skins',
    'visual.sound.section': 'SOUND EFFECTS',
    'visual.sound.on': 'Sounds on',
    'visual.sound.off': 'Sounds off',
    'visual.haptic.on': 'Haptic feedback (vibration) on',
    'visual.haptic.off': 'Haptic feedback (vibration) off',
    'visual.anim.section': 'ANIMATIONS',
    'visual.anim.on': 'Animations on',
    'visual.anim.off': 'Animations off',
    'visual.ext.section': 'EXTENSIONS',
    'visual.ext.hint': '— off by default',
    'visual.skins.section': 'SKINS',
    'visual.font.section': 'FONT',
    'visual.lang.section': 'LANGUAGE',

    // Extensions
    'ext.confetti': 'Confetti on win',
    'ext.confetti.sub': 'Colorful confetti shower on victory',
    'ext.dramaticWinner': 'Dramatic result',
    'ext.dramaticWinner.sub': 'Animated winner reveal with effect',
    'ext.coloredAvatars': 'Colored avatars',
    'ext.coloredAvatars.sub': 'Each player gets a color and initials',
    'ext.leaderGlow': 'Leader glow',
    'ext.leaderGlow.sub': 'Golden glow for the player in 1st place',
    'ext.progressBar': 'Progress bar',
    'ext.progressBar.sub': 'Visual bar filling toward the target',
    'ext.animatedScore': 'Animated score',
    'ext.animatedScore.sub': 'Numbers animate on each score entry',
    'ext.milestoneFlash': 'Milestone flash',
    'ext.milestoneFlash.sub': 'Flash when crossing 1,000, 2,000…',
    'ext.turnNotification': '"Your turn" popup',
    'ext.turnNotification.sub': 'Toast message on player change in online game',

    // Milestone flash
    'milestone.label': 'MILESTONE',

    // Online status
    'online.connected': 'Online',
    'online.offline': 'Offline',
    'online.error': 'Error',
  },
};

export const LangContext = createContext('sk');

export function useT() {
  const lang = useContext(LangContext);
  return (key) => T[lang]?.[key] ?? T.sk[key] ?? key;
}

export function useLang() {
  return useContext(LangContext);
}
