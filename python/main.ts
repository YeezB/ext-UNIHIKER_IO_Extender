    //% color="#f08080" iconWidth=50 iconHeight=40
    namespace mindUser{
        
    //% block="Set pin[a]output[b]" blockType="command"
    //% a.shadow="dropdown" a.options="a" 
    //% b.shadow="dropdown" b.options="b" 
    export function myBlock0(parameter: any, block: any) {
        let a= parameter.a.code
        let b= parameter.b.code
        Generator.addImport(`from pinpong.board import Board
from dfrobot_unihiker_expansion import UnihikerExpansion, IONum, IOType, GpioState`)
        Generator.addInit("myBlock7105",`Board("").begin()

eunihiker = UnihikerExpansion() `)
        Generator.addInit(`myBlock9367${a}`,`eunihiker.set_mode(IONum.${a}, IOType.GPIO_OUT)`)
        Generator.addCode(`eunihiker.set_gpio_state(IONum.${a}, GpioState.${b})`)
    }


    //% block="read[c]analog value" blockType="reporter"
    //% c.shadow="dropdown" c.options="c" 
    export function myBlock1(parameter: any, block: any) {
        let c= parameter.c.code
        Generator.addImport(`from pinpong.board import Board
from dfrobot_unihiker_expansion import UnihikerExpansion, IONum, IOType`)
        Generator.addInit("myBlock7105",`Board("").begin()
       
eunihiker = UnihikerExpansion() `)
        Generator.addInit(`myBlock9367${c}`,`eunihiker.set_mode(IONum.${c}, IOType.ADC)`)
        Generator.addCode(`eunihiker.get_adc_value(IONum.${c})`)
    }


    //% block="read[d]digital value" blockType="reporter"
    //% d.shadow="dropdown" d.options="d" 
    export function myBlock2(parameter: any, block: any) {
        let d= parameter.d.code
        Generator.addImport(`from pinpong.board import Board
from dfrobot_unihiker_expansion import UnihikerExpansion, IONum, IOType, GpioState`)
        Generator.addInit("myBlock7105",`Board("").begin()

eunihiker = UnihikerExpansion() `)
        Generator.addInit(`myBlock3526${d}`,`eunihiker.set_mode(IONum.${d}, IOType.GPIO_IN)`)
        Generator.addCode(`eunihiker.get_gpio_state(IONum.${d})`)
    }

    //% block="read[e][f]sensor in[g]" blockType="reporter"
    //% e.shadow="dropdown" e.options="e" 
    //% f.shadow="dropdown" f.options="f" 
    //% g.shadow="dropdown" g.options="g" 
    export function myBlock3(parameter: any, block: any) {
        let e= parameter.e.code
        let f= parameter.f.code
        let g= parameter.g.code
        Generator.addImport(`from pinpong.board import Board
from dfrobot_unihiker_expansion import UnihikerExpansion, IONum, IOType`)
        Generator.addInit("myBlock7105",`Board("").begin()

eunihiker = UnihikerExpansion() `)
        Generator.addInit(`myBlock3527${e}`,`eunihiker.set_mode(IONum.${e}, IOType.${f})`)
        Generator.addCode(`eunihiker.get_dht_value(IONum.${e}).${g}`)
    }

    //% block="read pin[e]DS18B20 temperature(℃)" blockType="reporter"
    //% e.shadow="dropdown" e.options="e" 
    export function myBlock4(parameter: any, block: any) {
        let e= parameter.e.code
        Generator.addImport(`from pinpong.board import Board
from dfrobot_unihiker_expansion import UnihikerExpansion, IONum, IOType`)
        Generator.addInit("myBlock7105",`Board("").begin()

eunihiker = UnihikerExpansion() `)
        Generator.addInit(`myBlock3527${e}`,`eunihiker.set_mode(IONum.${e}, IOType.DS18B20)`)
        Generator.addCode(`eunihiker.get_18b20_value(IONum.${e})`)
    }

    
    //% block="Set pin[h] 180° servo in[i]°" blockType="command"
    //% h.shadow="dropdown" h.options="h" 
    //% i.shadow="angle" i.defl=0
    export function myBlock10(parameter: any, block: any) {
        let h= parameter.h.code
        let i= parameter.i.code
        Generator.addImport(`from pinpong.board import Board
from dfrobot_unihiker_expansion import UnihikerExpansion, ServoNum`)
        Generator.addInit("myBlock7105",`Board("").begin()

eunihiker = UnihikerExpansion() `)
        Generator.addCode(`eunihiker.set_servo_angle(ServoNum.${h},${i})`)
    }

    //% block="Set pin[n] 360°servo[p]in speed[o]%" blockType="command"
    //% n.shadow="dropdown" n.options="n" 
    //% o.shadow="range" o.params.min=0  o.params.max=100 o.defl=50
    //% p.shadow="dropdown" p.options="p" 
    export function myBlock11(parameter: any, block: any) {
        let n= parameter.n.code
        let o= parameter.o.code
        let p= parameter.p.code
        Generator.addImport(`from pinpong.board import Board
from dfrobot_unihiker_expansion import UnihikerExpansion, ServoNum, Servo360Direction  `)
        Generator.addInit("myBlock7105",`Board("").begin()

eunihiker = UnihikerExpansion()`)
        Generator.addCode(`eunihiker.set_servo360(ServoNum.${n}, Servo360Direction.${p}, ${o})`)
    }
}