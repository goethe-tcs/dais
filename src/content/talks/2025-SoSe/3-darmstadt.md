---
speakerName: Jan van den Brand
title: The Structural Complexity of Matrix-Vector Multiplication
speakerAffiliation: Georgia Institute of Technology
room: "Raum S3|13/30 | Schloss Kaisersaalbau, Marktplatz 15, 64283 Darmstadt"
date: 2025-07-04 13:00
duration: 30
city: darmstadt
mapURL: https://maps.app.goo.gl/cQd2XPLfYMWVdMAn6
---
Computing sequential matrix-vector products is one of the most
fundamental subroutines underlying efficient algorithms for learning,
optimization, computational geometry, online algorithms, and many other
fields. We consider the problem of preprocessing an $n\times n$ matrix
$M$, and then supporting queries that for any vector $v$ returns the
matrix-vector product $Mv$ faster than naive matrix-vector-multiplication.
This problem has been extensively studied in both theory and practice,
revealing a gap in our complexity understanding: on one side,
practitioners have developed algorithms that are highly efficient in
practice, whereas on the other side, theoreticians have proven that the
problem cannot be solved faster than naive multiplication in the
worst-case. This lower bound holds even in the average-case, implying
that the existing typical average-case analyses cannot explain this gap
between theory and practice. Hence, we study the problem for
\emph{structured} matrices.
We show that for $n\times n$ matrices of VC-dimension $d$, the
matrix-vector multiplication problem can be solved with $\widetilde{O}(n^2)$
preprocessing and $\widetilde{O}(n^{2-1/d})$ query time.  Given the low
constant VC-dimensions observed in most real-world data, our results
posit an explanation for why the problem can be solved so much faster in
practice.

Joint work with: Emile Anand and Rose McCarty


