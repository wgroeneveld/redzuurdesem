#!/usr/bin/env python

"""
Pandoc filter to convert horizontal rules (* * *)
to the "plain or fancy break" used by the LaTeX memoir class
Source: https://gist.github.com/momikey/9b0d5d52d84704d264eb59df9297a13f
"""

from pandocfilters import toJSONFilter, RawBlock, HorizontalRule
import sys

def action(k, v, fmt, meta):
    if k == 'HorizontalRule':
        return RawBlock('latex', '\\pfbreak')

if __name__ == "__main__":
    toJSONFilter(action)
    sys.stdout.flush()