## ブランチ運用

ブランチ運用はいかに示す図の通り。

```stl
solid branch_model
  // Main Branch (Horizontal)
  facet normal 0 0 0
    outer loop
      vertex 0 0 0
      vertex 10 0 0
      vertex 0 1 0
    endloop
  endfacet
  facet normal 0 0 0
    outer loop
      vertex 10 0 0
      vertex 10 1 0
      vertex 0 1 0
    endloop
  endfacet

  // Develop Branch (Vertical)
  facet normal 0 0 0
    outer loop
      vertex 5 0 0
      vertex 5 0 5
      vertex 6 0 5
    endloop
  endfacet
  facet normal 0 0 0
    outer loop
      vertex 5 0 0
      vertex 6 0 5
      vertex 6 0 0
    endloop
  endfacet

  // Feature Branch (Diagonal from Develop)
  facet normal 0 0 0
    outer loop
      vertex 5 0 5
      vertex 8 0 8
      vertex 6 0 5
    endloop
  endfacet
  facet normal 0 0 0
    outer loop
      vertex 8 0 8
      vertex 6 0 5
      vertex 8 0 7
    endloop
  endfacet

  // Fix Branch (Diagonal from Develop)
  facet normal 0 0 0
    outer loop
      vertex 5 0 5
      vertex 3 0 8
      vertex 6 0 5
    endloop
  endfacet
  facet normal 0 0 0
    outer loop
      vertex 3 0 8
      vertex 6 0 5
      vertex 3 0 7
    endloop
  endfacet

  // Hotfix Branch (Direct from Main)
  facet normal 0 0 0
    outer loop
      vertex 9 0 0
      vertex 9 0 3
      vertex 10 0 3
    endloop
  endfacet
  facet normal 0 0 0
    outer loop
      vertex 9 0 0
      vertex 10 0 3
      vertex 10 0 0
    endloop
  endfacet

endsolid branch_model

```
