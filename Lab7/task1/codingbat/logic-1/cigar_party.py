def cigar_party(cigars, is_weekend):
  if is_weekend:
    if cigars > 39:
      return True
    else:
      return False
  else:
    if cigars > 39 and cigars < 61:
      return True
    else:
      return False