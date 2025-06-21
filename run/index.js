import { add } from '../pure/add.js'
import { applyDiscount } from '../pure/applyDiscount.js'
import { double } from '../pure/double.js'

import { increment } from '../impure/increment.js'
import { applyTax } from '../impure/applyTax.js'
import { doubleMutate } from '../impure/doubleMutate.js'

console.log('--- PURE FUNCTIONS ---')
console.log('add(2, 3):', add(2, 3))
console.log('applyDiscount(100, 15):', applyDiscount(100, 15))
console.log('double([1, 2, 3]):', double([1, 2, 3]))

console.log('\n--- IMPURE FUNCTIONS ---')
console.log('increment():', increment())
console.log('increment():', increment())
console.log('applyTax(100):', applyTax(100))

const nums = [1, 2, 3]
console.log('doubleMutate([1, 2, 3]):', doubleMutate(nums))
console.log('Original nums after mutation:', nums)
