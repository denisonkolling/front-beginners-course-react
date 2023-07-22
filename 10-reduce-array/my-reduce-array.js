const data = [
	{ marca: 'Freightliner', modelo: 'Cascadia', potencia: 350},
	{	marca: 'Kenworth', modelo: 'T680',	potencia: 400},
	{	marca: 'Peterbilt',	modelo: '579', potencia: 450},
	{ marca: 'Volvo', modelo: 'FH',	potencia: 450},
  { marca: 'Mercedes-Benz',	modelo: 'Actros',	potencia: 400},
	{	marca: 'DAF',	modelo: 'XF',	potencia: 400},
	{	marca: 'Scania',	modelo: 'R', potencia: 650},
	{	marca: 'MAN',	modelo: 'TGX',	potencia: 450},
	{	marca: 'Iveco',	modelo: 'Stralis',	potencia: 650},
	{ marca: 'Renault',	modelo: 'T', potencia: 650},
];

const trucksPower = data.reduce((acc, truck) => {
  const power = truck.potencia
  if (acc[power] == null) acc[power] = []
  acc[power].push(truck.modelo)
  return acc
}, {})

console.log(trucksPower)

const howManyPower = data.reduce((acc, truck) => {
  if (acc[truck.potencia] == null) {
    acc[truck.potencia] =1
  } else {
    ++acc[truck.potencia]
  }
  return acc
}, {})

console.log(howManyPower)