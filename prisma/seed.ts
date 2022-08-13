import { PrismaClient } from '@prisma/client'
import { AttributesData } from '../src/dtos/AttributesData.dto'


const prisma = new PrismaClient()

function attributes(): AttributesData {
  const attributes: AttributesData = {
    hp: Math.floor(Math.random() * 100),
    attack: Math.floor(Math.random() * 100),
    defense: Math.floor(Math.random() * 100),
    specialAttack: Math.floor(Math.random() * 100),
    specialDefense: Math.floor(Math.random() * 100),
    speed: Math.floor(Math.random() * 100),
  }

  return attributes
}

async function main() {
  console.log('Populando banco de dados...')

  await prisma.card.create({
    data: {
      name: 'vulpix',
      attributes: {
        create: attributes()
      }
    }
  })

  await prisma.card.create({
    data: {
      name: 'wartortle',
      attributes: {
        create: attributes()
      }
    }
  })

  await prisma.card.create({
    data: {
      name: 'caterpie',
      attributes: {
        create: attributes()
      }
    }
  })

  await prisma.card.create({
    data: {
      name: 'rattata',
      attributes: {
        create: attributes()
      }
    }
  })

  await prisma.card.create({
    data: {
      name: 'nidoran',
      attributes: {
        create: attributes()
      }
    }
  })

  await prisma.card.create({
    data: {
      name: 'mankey',
      attributes: {
        create: attributes()
      }
    }
  })
}

main().catch(err => {
  console.log(err)
  process.exit(1)
})
.finally(async () => {
  console.log('População completa')
  await prisma.$disconnect();
})