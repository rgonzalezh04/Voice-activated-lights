led.enable(false)
let strip = neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
let nivel_luz = 0
let nivel_voz = 0
basic.forever(function () {
    nivel_luz = smarthome.ReadLightIntensity(AnalogPin.P3)
    serial.writeValue("nivel de luz", nivel_luz)
    if (nivel_luz < 10) {
        nivel_voz = smarthome.ReadNoise(AnalogPin.P2)
        serial.writeValue("nivel de voz", nivel_voz)
        if (nivel_voz > 70) {
            strip.showColor(neopixel.colors(NeoPixelColors.White))
            basic.pause(5000)
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
        }
    }
})
