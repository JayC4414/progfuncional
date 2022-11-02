function gaussian_alt(mean, variance) {
    return function(x) {
      return 1 / Math.sqrt(2 * Math.PI * variance) *
        Math.exp((x - mean)**2 / (-2 * variance));
    };
  }
  
// Aplicamos la media y varianza
standard_normal = gaussian.bind(null, 2, 1);
console.log(`N(3 | 0, 1) = ${standard_normal(3)}`);