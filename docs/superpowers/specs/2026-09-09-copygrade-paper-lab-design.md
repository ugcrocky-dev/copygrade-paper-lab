# CopyGrade Paper Lab (separate dashboard)

**Date:** 2026-09-09  
**Status:** Approved (user: option 3 — Vercel + VPS; do not touch existing Paper Lab)

## Goal

A second paper-trading dashboard for **only** the 5 CopyGrade wallets @ **$1,000** each. Existing Polymarket Paper Lab (100 bots) stays on `main` / live URL — **no merge of PR #6**.

## Scope

| In | Out |
|---|---|
| New repo `copygrade-paper-lab` | Touching live paperlab `main` or VPS :3010 |
| 5 bots: PoppyG, phatsddds125, Misty, ziiizar01, BuBu12 | The other 100 strategies |
| `fixedWallet` copy logic + paper PnL | Live Polymarket US execution |
| Deploy Vercel + VPS port 3011 | Merging PR #6 into paper-lab |

## Architecture

- Same Next.js paper engine as Polymarket Paper Lab
- Catalog contains only `wd_51`–`wd_55`
- Store uses `copygrade-lab-state.json` (Vercel Blob) / local `data/`
- UI branded CopyGrade Paper Lab

## Deploy

- Vercel project `copygrade-paper-lab`
- VPS `108.174.57.19:3011` + `copygrade.108.174.57.19.nip.io`
