#!/usr/bin/env bash
# Stop hook: if I edited a file this turn, block once and require /code-review.
# The "changed-this-turn" flag is set by the PostToolUse hook on Write/Edit.
# Loop guard: stop_hook_active is true when we are already continuing from a
# previous Stop block, so we never block twice in a row.

input=$(cat)
flag=".claude/.changed-this-turn"

# Already continuing from a stop-hook block -> allow stop, clean up the flag.
if printf '%s' "$input" | grep -Eq '"stop_hook_active"[[:space:]]*:[[:space:]]*true'; then
  rm -f "$flag"
  exit 0
fi

# Did I edit a file during this turn?
if [ -f "$flag" ]; then
  rm -f "$flag"
  printf '%s' '{"decision":"block","reason":"You changed files this turn. Before finishing, invoke the code-review skill on the current diff (run /code-review, or /code-review --fix to auto-apply safe fixes), address any findings, then stop."}'
fi

exit 0
