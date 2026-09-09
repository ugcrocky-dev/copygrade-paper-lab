import { StrategyDef } from "../types";

const wd = (
  n: number,
  key: string,
  name: string,
  description: string,
  params: StrategyDef["params"]
): StrategyDef => ({
  id: `wd_${String(n).padStart(2, "0")}_${key}`,
  name,
  family: "wallet_discovery",
  description,
  params,
});

/** CopyGrade shortlist only — one paper bot per wallet @ $1,000. */
export const WALLET_STRATEGIES: StrategyDef[] = [
  wd(51, "cg_poppyg", "CopyGrade · PoppyG", "Mirror CopyGrade #1 PoppyG (score 95, farming clean).", {
    fixedWallet: "0x5b7fc994c653072b721669229ea2bed937065fea",
    handle: "PoppyG",
    mode: "buys_only",
    topN: 1,
  }),
  wd(52, "cg_phatsddds125", "CopyGrade · phatsddds125", "Mirror CopyGrade #2 phatsddds125 (score 94, farming clean).", {
    fixedWallet: "0x02787037f71640fd46b8f0d127b9d40e40a5bff4",
    handle: "phatsddds125",
    mode: "buys_only",
    topN: 1,
  }),
  wd(53, "cg_misty", "CopyGrade · Misty-Notoriety-Manager", "Mirror CopyGrade #3 Misty-Notoriety-Manager (score 94, farming clean).", {
    fixedWallet: "0xe9874755a61983acda6e51487d39314b1db087c8",
    handle: "Misty-Notoriety-Manager",
    mode: "buys_only",
    topN: 1,
  }),
  wd(54, "cg_ziiizar01", "CopyGrade · ziiizar01", "Mirror CopyGrade #4 ziiizar01 (score 93, farming clean).", {
    fixedWallet: "0xb9416f6ca813e46ed2f73071cca011663dac1619",
    handle: "ziiizar01",
    mode: "buys_only",
    topN: 1,
  }),
  wd(55, "cg_bubu12", "CopyGrade · BuBu12", "Mirror CopyGrade #5 BuBu12 (score 92, farming clean).", {
    fixedWallet: "0xea41ce13c290a4491f946b5976c79c901ff80782",
    handle: "BuBu12",
    mode: "buys_only",
    topN: 1,
  }),
];

export const PROP_STRATEGIES: StrategyDef[] = [];

export const ALL_STRATEGIES: StrategyDef[] = [...WALLET_STRATEGIES];

export function getStrategy(id: string) {
  return ALL_STRATEGIES.find((s) => s.id === id);
}
