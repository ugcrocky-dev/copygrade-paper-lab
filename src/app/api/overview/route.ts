import { NextResponse } from "next/server";
import { readStateAsync } from "@/lib/store";
import { getStrategy } from "@/lib/strategies/catalog";

export const dynamic = "force-dynamic";

export async function GET() {
  const state = await readStateAsync();
  const bots = state.bots.map((b) => {
    const netPnl = b.equity - b.startingBankroll;
    const fills = b.fills || [];
    const positiveTrades = fills.filter((f) => (f.realizedPnl || 0) > 0).length;
    const negativeTrades = fills.filter((f) => (f.realizedPnl || 0) < 0).length;
    return {
      id: b.id,
      strategyId: b.strategyId,
      status: b.status,
      equity: b.equity,
      cash: b.cash,
      feesPaid: b.feesPaid || 0,
      realizedPnl: b.realizedPnl || 0,
      unrealizedPnl: b.unrealizedPnl || 0,
      netPnl,
      tradeCount: b.tradeCount,
      maxDrawdown: b.maxDrawdown,
      watchedWallets: b.watchedWallets || [],
      positiveTrades,
      negativeTrades,
      profitPct: b.tradeCount ? positiveTrades / b.tradeCount : 0,
      strategy: getStrategy(b.strategyId),
    };
  });

  const runningCount = bots.filter(
    (b) => b.status === "running" || b.status === "eligible_for_live"
  ).length;
  const eligibleCount = bots.filter((b) => b.status === "eligible_for_live").length;
  const totalEquity = bots.reduce((s, b) => s + b.equity, 0);
  const totalPnl = bots.reduce((s, b) => s + b.netPnl, 0);
  const totalFees = bots.reduce((s, b) => s + b.feesPaid, 0);
  const totalRealized = bots.reduce((s, b) => s + b.realizedPnl, 0);
  const totalUnrealized = bots.reduce((s, b) => s + b.unrealizedPnl, 0);
  const totalTrades = bots.reduce((s, b) => s + b.tradeCount, 0);

  const top = [...bots].sort((a, b) => b.netPnl - a.netPnl);

  return NextResponse.json({
    updatedAt: state.updatedAt,
    strategyCount: bots.length,
    runningCount,
    eligibleCount,
    totalEquity,
    totalPnl,
    totalFees,
    totalRealized,
    totalUnrealized,
    totalTrades,
    top,
    bots: top,
    totals: {
      equity: totalEquity,
      realizedPnl: totalRealized,
      unrealizedPnl: totalUnrealized,
      feesPaid: totalFees,
      netPnl: totalPnl,
      running: runningCount,
    },
    rules: state.rules,
  });
}
