"use client"

import { SceneWakeup } from "@/components/scenes/scene-wakeup"
import { SceneChaos } from "@/components/scenes/scene-chaos"
import { SceneCore } from "@/components/scenes/scene-core"
import { SceneEfficiency } from "@/components/scenes/scene-efficiency"
import { SceneReceipt } from "@/components/scenes/scene-receipt"
import { SceneNetwork } from "@/components/scenes/scene-network"
import { SceneClose } from "@/components/scenes/scene-close"
import { ProgressIndicator } from "@/components/progress-indicator"

export function FlorisPage() {
  return (
    <main className="relative bg-[#0A261D]">
      <ProgressIndicator />
      
      {/* Scene 1: The Wake-up Call */}
      <SceneWakeup />

      {/* Scene 2: The Chaos */}
      <SceneChaos />

      {/* Scene 3: The Core - TMA Solution */}
      <SceneCore />

      {/* Scene 4: Efficiency Split - Old vs New */}
      <SceneEfficiency />

      {/* Scene 5: Receipt Math */}
      <SceneReceipt />

      {/* Scene 6: The Network - Client Base & Admin */}
      <SceneNetwork />

      {/* Scene 7: The Close - CTA */}
      <SceneClose />
    </main>
  )
}
