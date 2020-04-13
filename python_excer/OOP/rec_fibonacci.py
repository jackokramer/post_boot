def fibnoacci(n):
    if n<2: return n
    else:
        return (fibnoacci(n-1)+ fibnoacci(n-2))