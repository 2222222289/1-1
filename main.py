def on_forever():
    basic.show_string("c")
    basic.show_string("o")
    basic.show_string("w")
    sensors.dd_mmotor(AnalogPin.P13, 0, AnalogPin.P14, 255)
    sensors.dd_mmotor(AnalogPin.P15, 1, AnalogPin.P16, 255)
basic.forever(on_forever)
