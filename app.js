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
let quorumDeElderesPorcentaje = 0.05
let primariaPorcentaje = 0.15
let mujeresJovenesPorcentaje = 0.15
let hombresJovenesPorcentaje = 0.15
let jaPorcentaje = 0.10
let escuelaDominicalPorcentaje = 0.05
let obispadoPorcentaje = 0.25

sociedadDeSocorro.innerHTML = (presupuesto * sociedadDeSocorroPorcentaje).toFixed(2)
quorumDeElderes.innerHTML = (presupuesto * quorumDeElderesPorcentaje).toFixed(2)
primaria.innerHTML = (presupuesto * primariaPorcentaje).toFixed(2)
mujeresJovenes.innerHTML = (presupuesto * mujeresJovenesPorcentaje).toFixed(2)
hombresJovenes.innerHTML = (presupuesto * hombresJovenesPorcentaje).toFixed(2)
ja.innerHTML = (presupuesto * jaPorcentaje).toFixed(2)
escuelaDominical.innerHTML = (presupuesto * escuelaDominicalPorcentaje).toFixed(2)
obispado.innerHTML = (presupuesto * obispadoPorcentaje).toFixed(2)

let totalCalculo = (sociedadDeSocorroPorcentaje * presupuesto) + (quorumDeElderesPorcentaje * presupuesto) + (primariaPorcentaje * presupuesto) + (mujeresJovenesPorcentaje * presupuesto) + (hombresJovenesPorcentaje * presupuesto) + (jaPorcentaje * presupuesto) + (escuelaDominicalPorcentaje * presupuesto) + (obispadoPorcentaje * presupuesto)
total.innerHTML = (totalCalculo).toFixed(2)
