---
layout: post
title: ELOT-743 translator
date: 2013-05-18 10:00:00.000000000 +03:00
categories:
- Projects
tags:
- Encodings
- Greek
- Python
---
I had a task to translate a big Greek address book in English.

Due to the fact that Greek Language is full of special characters, a problem occurred when passports where to be created. There should be a fixed way to translate names from Greek to English.
So the ELOT-743 standard was created to solve the confusion.
<!--more-->

**_Here you see most of it:_**

| Greek | English | Greek | English | Greek | English | Greek | English |
| --- | --- | --- | --- | --- | --- | --- | --- |
| α | a | Ή | I | Ξ | X | Ύ | Y |
| ά | a | θ | th | ο | o | Ϋ | Y |
| Α | A | Θ | TH | ό | o | φ | f |
| Ά | A | ι | i | Ο | O | Φ | F |
| β | v | ί | i | Ό | O | χ | ch |
| Β | V | ϊ | i | π | p | Χ | CH |
| γ | γ | ΐ | i | Π | P | ψ | ps |
| Γ | G | Ι | I | ρ | r | Ψ | PS |
| δ | d | Ί | I | Ρ | R | ω | o |
| Δ | D | Ϊ | I | σ | s | ώ | o |
| ε | e | κ | k | ς | s | Ω | O |
| έ | e | Κ | K | Σ | S | Ώ | O |
| Ε | E | λ | l | τ | t | ΟΥ | OU |
| Έ | E | Λ | L | Τ | T | ου | ou |
| ζ | z | μ | m | υ | y | ού | ou |
| Ζ | Z | Μ | M | ύ | y | Ού | Ou |
| η | i | ν | n | ϋ | y | γγ | ng |
| ή | i | Ν | N | ΰ | y | ΓΓ | NG |
| Η | I | ξ | x | Υ | Y | Γγ | Ng |

So to save my self from the abyss and to avoid the government's site that had the capability to translate only small text, I wrote a python script myself.

Here is the **_dictionary_** to translate the strings:

```python
# -*- coding= utf8 -*-
"""Main source http://www.sete.gr/files/Media/Egkyklioi/040707Latin-Greek.pdf
"""
dict={
"α":"a","ά":"a","Α":"A","Ά":"A","β":"v","Β":"V","γ":"γ","Γ":"G","δ":"d","Δ":"D","ε":"e","έ":"e","Ε":"E","Έ":"E","ζ":"z","Ζ":"Z","η":"i","ή":"i","Η":"I","Ή":"I","θ":"th","Θ":"TH","ι":"i","ί":"i","ϊ":"i","ΐ":"i","Ι":"I","Ί":"I","Ϊ":"I","κ":"k","Κ":"K","λ":"l","Λ":"L","μ":"m","Μ":"M","ν":"n","Ν":"N","ξ":"x","Ξ":"X","ο":"o","ό":"o","Ο":"O","Ό":"O","π":"p","Π":"P","ρ":"r","Ρ":"R","σ":"s","ς":"s","Σ":"S","τ":"t","Τ":"T","υ":"y","ύ":"y","ϋ":"y","ΰ":"y","Υ":"Y","Ύ":"Y","Ϋ":"Y","φ":"f","Φ":"F","χ":"ch","Χ":"CH","ψ":"ps","Ψ":"PS","ω":"o","ώ":"o","Ω":"O","Ώ":"O","ΟΥ":"OU","ου":"ou","ού":"ou","Ού":"Ou","γγ":"ng","ΓΓ":"NG","Γγ":"Ng",
}

```

And here is the actual **_script_**:

```python
#!/usr/bin/python

# -*- coding= utf8 -*-
import sys, getopt
from string import maketrans
from elot743 import *

def replace_all(text, dic):
     for i, j in dic.iteritems():
              if i != j:
                  text = text.replace(i, j)
     text.replace(',' , '\n')
     return text

def readFile(infile):
     print "reading file",infile,"...\n"
     i = open(infile, 'r')
     array=[]
     for line in i:
          array.append(replace_all(line.rstrip('\n'),dict))

     i.close()
     return array
     print "\nfinished reading file!\n"

def writeFile(outfile, array):
     print "writing to file",outfile,"...\n"
     print array
     o = open(outfile, 'w')
     for item in array:
           o.write("%s\n" % item)
      o.close()
     print "\nfinished writing to file!\n"

def main(argv):
   inputfile = ''
   outputfile = ''
   try:
      opts, args = getopt.getopt(argv,"hi:o:",["ifile=","ofile="])
   except getopt.GetoptError:
      print 'names.py -i  -o '
      sys.exit(2)
   for opt, arg in opts:
      if opt == '-h':
         print 'names.py -i  -o '
         sys.exit()
      elif opt in ("-i", "--ifile"):
         inputfile = arg
      elif opt in ("-o", "--ofile"):
         outputfile = arg
   if inputfile == '':
      inputfile = raw_input('File where the names to be translated exist (ex. names.txt) : ')
   if outputfile =='':
      outputfile = raw_input('File where the translated names will be written (ex. trnames.txt) : ')
   print 'Input file is "', inputfile
   print 'Output file is "', outputfile

   transArray=[]

   transArray=readFile(inputfile)
   writeFile(outputfile,transArray)
   print 'File is translated!'

if __name__ == "__main__":
   main(sys.argv[1:])

```

To run the script, you can call it from **_command line_** by typing:

```
python names.py -i  -o

```

Where `the text file where the names to be translated exist and` the text file where the translated names will be written.

**-or-**

You can run it without the arguments and it will prompt you for the file names.

I believe that it will not be helpful to many but it could be a relatively good example of using dictionaries in Python;)

The project code can be found [here](https://github.com/tsagi/elot-743_translator) on GitHub. Feel free to use it.

Feel free to leave your comment below!
