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
  wd(56, "cg_glaring_farrow", "CopyGrade · Glaring-Farrow", "Mirror CopyGrade #4 Glaring-Farrow (shortlist, farming clean).", {
    fixedWallet: "0x0882100dc6966849e2028bcf8a4d744760ff15b9",
    handle: "Glaring-Farrow",
    mode: "buys_only",
    topN: 1,
  }),
  wd(57, "cg_ringed_laparoscope", "CopyGrade · Ringed-Laparoscope", "Mirror CopyGrade #6 Ringed-Laparoscope (shortlist, farming clean).", {
    fixedWallet: "0xb15ddec0f7d4d9db591bc281978104532936558a",
    handle: "Ringed-Laparoscope",
    mode: "buys_only",
    topN: 1,
  }),
  wd(58, "cg_lynxthepredator", "CopyGrade · LynxThePredator", "Mirror CopyGrade #7 LynxThePredator (shortlist, farming clean).", {
    fixedWallet: "0xcfce55d6322775854b91a8dc27f4d131860deb1c",
    handle: "LynxThePredator",
    mode: "buys_only",
    topN: 1,
  }),
  wd(59, "cg_kevtp", "CopyGrade · kevtp", "Mirror CopyGrade #9 kevtp (shortlist, farming clean).", {
    fixedWallet: "0xdc4b06981e74fe11585438eb40f10bd79f43dbca",
    handle: "kevtp",
    mode: "buys_only",
    topN: 1,
  }),
  wd(60, "cg_2x33dcs3qiog", "CopyGrade · 2x33dcs3qiog", "Mirror CopyGrade #10 2x33dcs3qiog (shortlist, farming clean).", {
    fixedWallet: "0xa96d7d8aada3a4622527fcaed79b7fa48bb8acdd",
    handle: "2x33dcs3qiog",
    mode: "buys_only",
    topN: 1,
  }),
  wd(61, "cg_duncs723", "CopyGrade · Duncs723", "Mirror CopyGrade #11 Duncs723 (shortlist, farming clean).", {
    fixedWallet: "0x9f60289e72e091a789ab072b8c8066ddec323a16",
    handle: "Duncs723",
    mode: "buys_only",
    topN: 1,
  }),
  wd(62, "cg_w_dfa1d072", "CopyGrade · 0xdfa1…d072", "Mirror CopyGrade #12 0xdfa1…d072 (shortlist, farming clean).", {
    fixedWallet: "0xdfa1c280d89a2aa2e16ebd6064f6013a53dcd072",
    handle: "0xdfa1…d072",
    mode: "buys_only",
    topN: 1,
  }),
  wd(63, "cg_w_d26d82d5", "CopyGrade · 0xd26d…82d5", "Mirror CopyGrade #13 0xd26d…82d5 (shortlist, farming clean).", {
    fixedWallet: "0xd26d1794192204aa99b690758592adb7992b82d5",
    handle: "0xd26d…82d5",
    mode: "buys_only",
    topN: 1,
  }),
  wd(64, "cg_w_f5dcb5cd", "CopyGrade · 0xf5dc…b5cd", "Mirror CopyGrade #14 0xf5dc…b5cd (shortlist, farming clean).", {
    fixedWallet: "0xf5dc2d4a506376bc30b01ed0c38b3473daf0b5cd",
    handle: "0xf5dc…b5cd",
    mode: "buys_only",
    topN: 1,
  }),
  wd(65, "cg_avganon", "CopyGrade · avgAnon", "Mirror CopyGrade #15 avgAnon (shortlist, farming clean).", {
    fixedWallet: "0x277220d945c7176691cd4ae2360f61499a5e5c9c",
    handle: "avgAnon",
    mode: "buys_only",
    topN: 1,
  }),
  wd(66, "cg_1899981", "CopyGrade · 1899981", "Mirror CopyGrade #16 1899981 (shortlist, farming clean).", {
    fixedWallet: "0x7c06a1a864bf8b8e19c4d3299fe7ed52f3c78d18",
    handle: "1899981",
    mode: "buys_only",
    topN: 1,
  }),
  wd(67, "cg_crushing_spill", "CopyGrade · Crushing-Spill", "Mirror CopyGrade #17 Crushing-Spill (shortlist, farming clean).", {
    fixedWallet: "0x9d37b3cbd5dc8338fbfe281fc1d7616ddd2616fa",
    handle: "Crushing-Spill",
    mode: "buys_only",
    topN: 1,
  }),
  wd(68, "cg_mangoking05", "CopyGrade · mangoking05", "Mirror CopyGrade #18 mangoking05 (shortlist, farming clean).", {
    fixedWallet: "0x442c533dd1bebea3f670185a6a6c091dee243db8",
    handle: "mangoking05",
    mode: "buys_only",
    topN: 1,
  }),
  wd(69, "cg_fishermansfiend", "CopyGrade · FishermansFiend", "Mirror CopyGrade #19 FishermansFiend (shortlist, farming clean).", {
    fixedWallet: "0x3a591e337729dd9f891f6d94ba77d01c3a626c6f",
    handle: "FishermansFiend",
    mode: "buys_only",
    topN: 1,
  }),
  wd(70, "cg_stuartmcdo", "CopyGrade · stuartmcdo", "Mirror CopyGrade #20 stuartmcdo (shortlist, farming clean).", {
    fixedWallet: "0xad0004c261ac99c8b394a0bfbd3bdf2da21b83ba",
    handle: "stuartmcdo",
    mode: "buys_only",
    topN: 1,
  }),
  wd(71, "cg_frosty2", "CopyGrade · Frosty2", "Mirror CopyGrade #21 Frosty2 (shortlist, farming clean).", {
    fixedWallet: "0xf915728ba9dcb35ad3c909c3d6fe2d75eecf0c01",
    handle: "Frosty2",
    mode: "buys_only",
    topN: 1,
  }),
  wd(72, "cg_glicha", "CopyGrade · Glicha", "Mirror CopyGrade #22 Glicha (shortlist, farming clean).", {
    fixedWallet: "0x91ff094fca8aa7f45e7276d65cdd9154f2dd8f40",
    handle: "Glicha",
    mode: "buys_only",
    topN: 1,
  }),
  wd(73, "cg_definitive_grammar", "CopyGrade · Definitive-Grammar", "Mirror CopyGrade #23 Definitive-Grammar (shortlist, farming clean).", {
    fixedWallet: "0x4677c04c116861715cee7eb30edfcc7c9249dfaf",
    handle: "Definitive-Grammar",
    mode: "buys_only",
    topN: 1,
  }),
  wd(74, "cg_scientiarex", "CopyGrade · ScientiaRex", "Mirror CopyGrade #24 ScientiaRex (shortlist, farming clean).", {
    fixedWallet: "0x8f0b2957d8c0ef47609fd01e42959fa6c70e8be2",
    handle: "ScientiaRex",
    mode: "buys_only",
    topN: 1,
  }),
  wd(75, "cg_twei", "CopyGrade · Twei", "Mirror CopyGrade #25 Twei (shortlist, farming clean).", {
    fixedWallet: "0xecb95c5aba59f5bd31da27a4f80ca79bfc15bdd4",
    handle: "Twei",
    mode: "buys_only",
    topN: 1,
  }),
];

export const PROP_STRATEGIES: StrategyDef[] = [];

export const ALL_STRATEGIES: StrategyDef[] = [...WALLET_STRATEGIES];

export function getStrategy(id: string) {
  return ALL_STRATEGIES.find((s) => s.id === id);
}
