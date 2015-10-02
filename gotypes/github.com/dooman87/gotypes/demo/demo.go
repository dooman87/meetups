package main

import (
	"go/token"
	"go/parser"
	"go/ast"
	"log"
	"go/types"
	"fmt"
	"reflect"
)

const src  = `package greet

	var Greeting = "Hello "

	func greetBob() string {
		return Greeting + "Bob"
	}
`
/*
const src  = `package greet

	type Greet struct {
		GreetKeyword string
		Whom string
	}

	func (g *Greet) String() string {
		return g.GreetKeyword + " " + g.Whom
	}

	var Greeting = "Hello "

	func greetBob() string {
		g := &Greet {
			GreetKeyword: "Hello",
			Whom: "Bob",
		}
		return g.String()
	}
`
*/

func main() {
	var fset *token.FileSet
	var file *ast.File
	var pkg *types.Package
	var err error

	fset = token.NewFileSet()
	file, err = parser.ParseFile(fset, "greet.go", src, 0)
	if err != nil {
		log.Fatal(err)
	}

	info := types.Info {
		Types: make(map[ast.Expr]types.TypeAndValue),
		Defs:  make(map[*ast.Ident]types.Object),
		Uses:  make(map[*ast.Ident]types.Object),
		Implicits: make(map[ast.Node]types.Object),
		Selections: make(map[*ast.SelectorExpr]*types.Selection),
		Scopes: make(map[ast.Node]*types.Scope),
		InitOrder: make([]*types.Initializer, 0),
	}

	var conf types.Config
	pkg, err = conf.Check("greet", fset, []*ast.File{file}, &info)

	if err != nil {
		log.Fatal(err)
	}

	fmt.Printf("Package %s sucsessfully parsed\n", pkg.Name())
	printTypes(info.Types, fset)
	printDefs(info.Defs, fset)
	printUses(info.Uses, fset)
	printImplicits(info.Implicits, fset)
	printSelections(info.Selections, fset)
	printScopes(info.Scopes, fset)
	printInitOrder(info.InitOrder, fset)
}

func printTypes(types map[ast.Expr]types.TypeAndValue, fset *token.FileSet) {
	fmt.Printf("-----------TYPES AND VALUES-----------\n")
	for e,t := range types {
		p := fset.Position(e.Pos());
		fmt.Printf("%s:%d:%d %s\n", p.Filename, p.Line, p.Column, reflect.TypeOf(e))
		if !t.IsNil() {
			if t.IsType() {
				fmt.Printf("\tTYPE: %s\n", t.Type.String())
			} else if t.Value != nil {
				fmt.Printf("\tVALUE: %s\n", t.Value.String())
			} else {
				fmt.Printf("\tVALUE: NIL\n")
			}
		}
	}
}

func printDefs(defs map[*ast.Ident]types.Object, fset *token.FileSet) {
	fmt.Printf("-----------DEFINITIONS-----------\n")
	for i,d := range defs {
		p := fset.Position(i.Pos());
		fmt.Printf("%s:%d:%d\n", p.Filename, p.Line, p.Column)

		if d != nil {
			fmt.Printf("\tDEF: %s %v\n", d.Name(), d.Exported())
		} else {
			fmt.Printf("\tNIL\n")
		}
	}
}

func printUses(uses map[*ast.Ident]types.Object, fset *token.FileSet) {
	fmt.Printf("-----------USES-----------\n")
	for i,d := range uses {
		p := fset.Position(i.Pos());
		fmt.Printf("%s:%d:%d\n", p.Filename, p.Line, p.Column)

		if d != nil {
			fmt.Printf("\tUSE: %s %v\n", d.Name(), d.Exported())
		} else {
			fmt.Printf("\tNIL\n")
		}
	}
}

func printImplicits(implicits map[ast.Node]types.Object, fset *token.FileSet) {
	fmt.Printf("-----------IMPLICITS-----------\n")
	for i,d := range implicits {
		p := fset.Position(i.Pos());
		fmt.Printf("%s:%d:%d\n", p.Filename, p.Line, p.Column)

		if d != nil {
			fmt.Printf("\tIMPL: %s %v\n", d.Name(), d.Exported())
		} else {
			fmt.Printf("\tNIL\n")
		}
	}
}

func printSelections(selections map[*ast.SelectorExpr]*types.Selection, fset *token.FileSet) {
	fmt.Printf("-----------SELECTIONS-----------\n")
	for i,s := range selections {
		p := fset.Position(i.Pos());
		fmt.Printf("%s:%d:%d\n", p.Filename, p.Line, p.Column)

		if s != nil {
			fmt.Printf("\tSEL: %s\n", s.String())
		} else {
			fmt.Printf("\tNIL\n")
		}
	}
}

func printScopes(scopes map[ast.Node]*types.Scope, fset *token.FileSet) {
	fmt.Printf("-----------SCOPES-----------\n")
	for i,s := range scopes {
		p := fset.Position(i.Pos());
		fmt.Printf("%s:%d:%d\n", p.Filename, p.Line, p.Column)

		if s != nil {
			fmt.Printf("\tSCOPE: %s\n", s.String())
		} else {
			fmt.Printf("\tNIL\n")
		}
	}
}

func printInitOrder(initializers []*types.Initializer, fset *token.FileSet) {
	fmt.Printf("-----------INITIALIZERS-----------\n")
	for _, i := range initializers {
		if i != nil {
			p := fset.Position(i.Rhs.Pos());
			fmt.Printf("%s:%d:%d\n", p.Filename, p.Line, p.Column)
			for _, v := range i.Lhs {
				fmt.Printf("\tVAR: %s\n", v.Name())
			}
		} else {
			fmt.Printf("\tNIL\n")
		}
	}
}