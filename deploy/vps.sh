#!/usr/bin/env bash
# Deploy CopyGrade Paper Lab to RackNerd VPS without touching Paper Lab (:3010).
# Usage on the VPS: bash deploy/vps.sh
set -euo pipefail
APP_DIR=/opt/copygrade-paper-lab
PORT=3011
REPO=https://github.com/ugcrocky-dev/copygrade-paper-lab.git

mkdir -p "$APP_DIR"
if [ -d "$APP_DIR/.git" ]; then
  git -C "$APP_DIR" fetch origin
  git -C "$APP_DIR" reset --hard origin/main
else
  git clone "$REPO" "$APP_DIR"
fi
cd "$APP_DIR"
npm ci
npm run build
systemctl restart copygrade-paper-lab || true
echo "Listening on :$PORT — https://copygrade.108.174.57.19.nip.io"
