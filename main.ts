basic.forever(function () {
    basic.showString("c")
    basic.showString("o")
    basic.showString("w")
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    232
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    255
    )
})
