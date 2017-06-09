<template>
    <div style="margin-top: 30px;">
        <v-container fluid="fluid">
            <v-row>
                <v-col xs12 lg10 xl10 offset-lg1 offset-xl1>
                <h3 style="text-align: center;">Tipos de carros elétricos</h3>
                <br>
                <p style="text-align: left;">
                    Em essência podemos dizer que existem três tipos de veículos elétricos atualmente
                    no mercado:
                </p>
                <h4>Inteiramente elétrico</h4>
                <p>
                    Não possui motor de combustão como os convencionais a gasolina, etanol,
                    gás natural ou diesel. O único motor que o move é o elétrico, alimentado por
                    baterias. Após o uso estas baterias devem ser conectadas em uma tomada
                    ligada a rede elétrica para recarregar. Veículos desta categoria possuem uma
                    autonomia menor (andam menos quilômetros com uma única carga
                    completa). Alguns modelos de última geração já possuem autonomia bem
                    elevada como o Tesla.
                </p>
                <h4>Híbridos Plug-In</h4>
                <p>
                    São como os carros inteiramente elétricos, porém possuem um pequeno
                    motor de combustão que carrega as baterias. Este modelo possui a vantagem
                    de no caso da bateria se esgotar o motor de combustão mantém o carro em
                    movimento até que possa ser feita uma nova carga das baterias na rede
                    elétrica. Esta característica aumenta sua autonomia.
                </p>
                <h4>Híbridos</h4>
                <p>
                    Não se conecta a rede elétrica. Estes modelos possuem dois motores, um a
                    combustão e um elétrico. Em baixas velocidades, como no trânsito pesado,
                    por exemplo, são os motores elétricos que funcionam, já em altas velocidades
                    é o motor de combustão que assume.
                    O Toyota Prius (http://www.toyota.com/prius/) foi o veículo que deu novo
                    impulso aos elétricos, o Ford Fusion Hybrid
                    (http://quatrorodas.abril.com.br/carros/testes/ford-fusion-hybrid-757087.shtml)
                    é a versão da Ford para os híbridos.
                    Fora a recarga conectando-se na rede elétrica ou através de um motor de
                    combustão dentro do próprio carro pode-se usar outras alternativas para recarregar
                    as baterias. Um sistema muito utilizado é transformar a energia dissipada nas
                    frenagens em carga para a bateria através de dínamos especialmente projetados.
                </p>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return { }
  }
}
</script>
