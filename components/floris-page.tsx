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
      <div id="wakeup">
        <SceneWakeup />
      </div>

      {/* Scene 2: The Chaos */}
      <div id="chaos">
        <SceneChaos />
      </div>

      {/* Scene 3: The Core - TMA Solution */}
      <div id="core">
        <SceneCore />
      </div>

      {/* Scene 4: Efficiency Split - Old vs New */}
      <div id="efficiency">
        <SceneEfficiency />
      </div>

      {/* Scene 5: Receipt Math */}
      <div id="receipt">
        <SceneReceipt />
      </div>

      {/* Scene 6: The Network - Client Base & Admin */}
      <div id="network">
        <SceneNetwork />
      </div>

      {/* Scene 7: The Close - CTA */}
      <div id="close">
        <SceneClose />
      </div>
    </main>
  )
}
