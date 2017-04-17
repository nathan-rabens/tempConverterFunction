function temp (t, u) {
   if (u === "C") {
    console.log(((t - 32) * .5556) + u);
 }
 else if (u === "F") {
      console.log(((t * (9/5)) + 32) + u);
 }
}
temp (212, "C");
temp (32, "C");
temp (65, "C");
temp (0, "F");
