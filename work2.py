import PyPDF2


text = ""
with open('Md_Zahid_ python.pdf', 'rb') as file:
    import pdb;pdb.set_trace()
    pdf_reader = PyPDF2.PdfReader(file)
    
    for page_num in range(len(pdf_reader.pages)):
        page = pdf_reader.pages[page_num]
        text += page.extract_text()

print(text)
