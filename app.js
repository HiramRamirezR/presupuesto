let presupuesto = 8884.80

let asignado = document.getElementById('asignado')

let sociedadDeSocorro = document.getElementById('sociedad-de-socorro')
let quorumDeElderes = document.getElementById('quorum-de-elderes')
let primaria = document.getElementById('primaria')
let mujeresJovenes = document.getElementById('mujeres-jovenes')
let hombresJovenes = document.getElementById('hombres-jovenes')
let ja = document.getElementById('ja')
let escuelaDominical = document.getElementById('escuela-dominical')
let obispado = document.getElementById('obispado')
let total = document.getElementById('total')

asignado.innerHTML = presupuesto

let sociedadDeSocorroPorcentaje = 0.10
let quorumDeElderesPorcentaje = 0.10
let primariaPorcentaje = 0.10
let mujeresJovenesPorcentaje = 0.10
let hombresJovenesPorcentaje = 0.10
let jaPorcentaje = 0.10
let escuelaDominicalPorcentaje = 0.10
let obispadoPorcentaje = 0.30

sociedadDeSocorro.innerHTML = presupuesto * sociedadDeSocorroPorcentaje
quorumDeElderes.innerHTML = presupuesto * quorumDeElderesPorcentaje
primaria.innerHTML = presupuesto * primariaPorcentaje
mujeresJovenes.innerHTML = presupuesto * mujeresJovenesPorcentaje
hombresJovenes.innerHTML = presupuesto * hombresJovenesPorcentaje
ja.innerHTML = presupuesto * jaPorcentaje
escuelaDominical.innerHTML = presupuesto * escuelaDominicalPorcentaje
obispado.innerHTML = presupuesto * obispadoPorcentaje

let totalCalculo = (sociedadDeSocorroPorcentaje * presupuesto) + (quorumDeElderesPorcentaje * presupuesto) + (primariaPorcentaje * presupuesto) + (mujeresJovenesPorcentaje * presupuesto) + (hombresJovenesPorcentaje * presupuesto) + (jaPorcentaje * presupuesto) + (escuelaDominicalPorcentaje * presupuesto) + (obispadoPorcentaje * presupuesto)
total.innerHTML = totalCalculo
