# Write a function to check if a number is an Achilles number.

An Achilles number is a number that,

Has prime factors with exponents of at least 2.
But, it can't be expressed as `m^k`, where both m and k are greater than 1.

For example, 72 can be expressed using its prime factors as `2^3 * 3^2`, but can't be expressed as `m^k`. Thus, 72 is an Achilles number.

Meanwhile, 16 can be expressed using its prime factors as `2^4`, which is also in the form `m^k`. So, 16 is not an Achilles number.

If the given number n is an Achilles Number, return "Achilles". Otherwise, return "Not Achilles".

Example

For this input

n = 72

the result should be:

"Achilles"

Reason: `72 = 2 ^ 3 × 3 ^ 2`, where both prime factors have at least a power of 2.


## Terms

*Prime factor*
- A number that divides it exactly and prime

*Exponent*
- How many times to multiply a number by itself. It's also called power
- a = base & n = exponent. a to the power of n.

