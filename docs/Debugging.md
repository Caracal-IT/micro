# Debugging AI: A Step-by-Step Checklist

When AI gives you a bad or confusing response, don’t just delete it — diagnose it. Here's a practical checklist to help you fix common issues through better prompting:



## Problem: Repetition
The model repeats phrases or sentences.

Fix: Add to your prompt:

`“Avoid repeating phrases. Use varied language.”`

## Problem: Drift
The response starts on-topic but veers off into unrelated territory.

Fix: Break large tasks into smaller parts.

`Ask for step-by-step responses, like “Give me the first part only.”`

## Problem: Hallucination
The AI makes up facts, names, or references.

Fix: Ground the prompt. Say:

```
“Only use verifiable sources. If unsure, say ‘I don’t know.’”
Or: “Cite your sources or give links I can check.”`
```

## Problem: Stalling or Vagueness
The response is too generic, like “It depends...” or “There are many factors…”

Fix: Ask for specifics. Try:
```
“Be specific. Give 3 actionable tips.”
“Avoid generalizations. Use concrete examples.”
```

## Problem: Off-Brand Tone or Style
The tone feels robotic, formal, or just not what you wanted.

Fix: Include a sample and say:

```
“Match the tone and style of this example.”
“Write this as if you’re speaking to [audience type].”
```

## Problem: Misunderstanding Your Request
The AI misunderstands what you want.

Fix: Ask the AI to explain its response:

```
“What part of my prompt led to this answer?”
“What assumptions are you making about my request?”
```

## Bonus Tip: Prompt Iteration as Debugging
If something’s off, don’t start over — revise your last prompt.

Add constraints, examples, or clarifications to steer the model.

Key message:
Prompting is debugging. Each mistake is a signal — not a failure. The more you refine, the smarter your outputs become.