import { useState } from "react"
import { HighlightedText } from "./HighlightedText"

const buildingTypes = [
  { id: "house", label: "Жилой дом", pricePerSqm: 25000 },
  { id: "bath", label: "Баня", pricePerSqm: 20000 },
  { id: "dacha", label: "Дача", pricePerSqm: 18000 },
]

const finishingOptions = [
  { id: "none", label: "Без отделки", multiplier: 1 },
  { id: "rough", label: "Черновая отделка", multiplier: 1.25 },
  { id: "full", label: "Под ключ", multiplier: 1.55 },
]

const floorOptions = [
  { id: "1", label: "1 этаж", multiplier: 1 },
  { id: "1.5", label: "1.5 этажа", multiplier: 1.35 },
  { id: "2", label: "2 этажа", multiplier: 1.6 },
]

export function Calculator() {
  const [buildingType, setBuildingType] = useState("house")
  const [finishing, setFinishing] = useState("none")
  const [floors, setFloors] = useState("1")
  const [area, setArea] = useState(80)

  const selectedType = buildingTypes.find((t) => t.id === buildingType)!
  const selectedFinishing = finishingOptions.find((f) => f.id === finishing)!
  const selectedFloors = floorOptions.find((f) => f.id === floors)!

  const price = Math.round(
    area * selectedType.pricePerSqm * selectedFinishing.multiplier * selectedFloors.multiplier / 1000
  ) * 1000

  const formatPrice = (p: number) =>
    p >= 1000000
      ? `от ${(p / 1000000).toFixed(1).replace(".0", "")} млн ₽`
      : `от ${(p / 1000).toFixed(0)} тыс. ₽`

  return (
    <section id="calculator" className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Онлайн-расчёт</p>
          <h2 className="text-5xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Рассчитайте <HighlightedText>стоимость</HighlightedText>
            <br />
            вашего проекта
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Укажите параметры — получите ориентировочную стоимость за 30 секунд.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-10">
            {/* Тип строения */}
            <div>
              <p className="text-sm font-medium mb-4 tracking-wide uppercase text-muted-foreground">Тип строения</p>
              <div className="flex flex-wrap gap-3">
                {buildingTypes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setBuildingType(t.id)}
                    className={`px-5 py-3 text-sm border transition-all duration-200 ${
                      buildingType === t.id
                        ? "bg-foreground text-background border-foreground"
                        : "border-border hover:border-foreground"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Площадь */}
            <div>
              <p className="text-sm font-medium mb-4 tracking-wide uppercase text-muted-foreground">
                Площадь — <span className="text-foreground">{area} м²</span>
              </p>
              <input
                type="range"
                min={30}
                max={300}
                step={10}
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full accent-foreground cursor-pointer"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>30 м²</span>
                <span>300 м²</span>
              </div>
            </div>

            {/* Этажность */}
            <div>
              <p className="text-sm font-medium mb-4 tracking-wide uppercase text-muted-foreground">Этажность</p>
              <div className="flex flex-wrap gap-3">
                {floorOptions.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFloors(f.id)}
                    className={`px-5 py-3 text-sm border transition-all duration-200 ${
                      floors === f.id
                        ? "bg-foreground text-background border-foreground"
                        : "border-border hover:border-foreground"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Отделка */}
            <div>
              <p className="text-sm font-medium mb-4 tracking-wide uppercase text-muted-foreground">Отделка</p>
              <div className="flex flex-wrap gap-3">
                {finishingOptions.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFinishing(f.id)}
                    className={`px-5 py-3 text-sm border transition-all duration-200 ${
                      finishing === f.id
                        ? "bg-foreground text-background border-foreground"
                        : "border-border hover:border-foreground"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Результат */}
          <div className="bg-foreground text-background p-10 flex flex-col gap-8 lg:sticky lg:top-32">
            <div>
              <p className="text-background/60 text-sm tracking-[0.2em] uppercase mb-3">Ориентировочная стоимость</p>
              <p className="text-5xl font-medium tracking-tight">{formatPrice(price)}</p>
            </div>

            <div className="border-t border-background/20 pt-8 space-y-3 text-sm text-background/70">
              <div className="flex justify-between">
                <span>Тип</span>
                <span className="text-background">{selectedType.label}</span>
              </div>
              <div className="flex justify-between">
                <span>Площадь</span>
                <span className="text-background">{area} м²</span>
              </div>
              <div className="flex justify-between">
                <span>Этажей</span>
                <span className="text-background">{selectedFloors.label}</span>
              </div>
              <div className="flex justify-between">
                <span>Отделка</span>
                <span className="text-background">{selectedFinishing.label}</span>
              </div>
            </div>

            <div className="border-t border-background/20 pt-8">
              <p className="text-background/50 text-xs leading-relaxed mb-6">
                Расчёт ориентировочный. Точная стоимость определяется после выезда на участок и согласования проекта.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center w-full gap-2 bg-background text-foreground px-8 py-4 text-sm tracking-wide hover:bg-background/90 transition-colors duration-300"
              >
                Получить точный расчёт
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Calculator
