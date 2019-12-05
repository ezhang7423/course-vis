const courses = [
    {
        "text": "CS8",
        "description": "Introduction to Computer Science"
    },
    {
        "text": "CS16",
        "description": "fill l8r"
    },
    {
        "text": "CS24",
        "description": "fill l8r"
    },
    {
        "text": "CS32",
        "description": "fill l8r"
    },
    {
        "text": "CS40",
        "description": "fill l8r"
    },
    {
        "text": "CS48",
        "description": "fill l8r"
    },
    {
        "text": "CS48",
        "description": "fill l8r"
    },
    {
        "text": "CS56",
        "description": "fill l8r"
    },
    {
        "text": "CS64",
        "description": "fill l8r"
    },
    {
        "text": "CS111",
        "description": "fill l8r"
    },
    {
        "text": "CS140",
        "description": "fill l8r"
    },
    {
        "text": "CS130A",
        "description": "fill l8r"
    },
    {
        "text": "CS130B",
        "description": "fill l8r"
    },
    {
        "text": "CS138",
        "description": "fill l8r"
    },
    {
        "text": "CS154",
        "description": "fill l8r"
    },
    {
        "text": "CS160",
        "description": "fill l8r"
    },
    {
        "text": "CS162",
        "description": "fill l8r"
    },
    {
        "text": "CS170",
        "description": "fill l8r"
    },
    {
        "text": "CS171",
        "description": "fill l8r"
    },
    {
        "text": "CS174A",
        "description": "fill l8r"
    },
    {
        "text": "CS174B",
        "description": "fill l8r"
    },
    {
        "text": "CS176A",
        "description": "fill l8r"
    },
    {
        "text": "CS176B",
        "description": "fill l8r"
    },
    {
        "text": "CS176C",
        "description": "fill l8r"
    },
    {
        "text": "CS177",
        "description": "fill l8r"
    },
    {
        "text": "CS178",
        "description": "fill l8r"
    },
    {
        "text": "CS180",
        "description": "fill l8r"
    },
    {
        "text": "CS184",
        "description": "fill l8r"
    },
    {
        "text": "CS185",
        "description": "fill l8r"
    },
    {
        "text": "CS189A",
        "description": "fill l8r"
    },
    {
        "text": "CS189B",
        "description": "fill l8r"
    },
    {
        "text": "CS190AA-ZZ",
        "description": "fill l8r"
    },
    {
        "text": "CS192",
        "description": "fill l8r"
    },
    {
        "text": "CS196",
        "description": "fill l8r"
    },
    {
        "text": "CS196B",
        "description": "fill l8r"
    },
    {
        "test": "MATH3A",
        "description": "fill l8r"
    },
    {
        "test": "MATH3B",
        "description": "fill l8r"
    },
    {
        "test": "MATH4A",
        "description": "fill l8r"
    },
    {
        "test": "MATH4B",
        "description": "fill l8r"
    },
    {
        "test": "MATH6A",
        "description": "fill l8r"
    },
    {
        "test": "PSTAT120A",
        "description": "fill l8r"
    },
    {
        "test": "PSTAT120B",
        "description": "fill l8r"
    },
    {
        "test": "ECE130A",
        "description": "fill l8r"
    },
    {
        "test": "ECE130B",
        "description": "fill l8r"
    },
    {
        "test": "ECE130C",
        "description": "fill l8r"
    },
    {
        "test": "ECE152A",
        "description": "fill l8r"
    },
    {
        "test": "MATH119B",
        "description": "fill l8r"
    },
    {
        "test": "ECE160",
        "description": "fill l8r"
    },
    {
        "test": "ECE178",
        "description": "fill l8r"
    },
    {
        "test": "MATH108A",
        "description": "fill l8r"
    },
    {
        "test": "MATH108B",
        "description": "fill l8r"
    },
    {
        "test": "MATH119A",
        "description": "fill l8r"
    },
    {
        "test": "MATH119B",
        "description": "fill l8r"
    },
    {
        "test": "MATH124A",
        "description": "fill l8r"
    },
    {
        "test": "MATH124B",
        "description": "fill l8r"
    },
    {
        "test": "PSTAT122",
        "description": "fill l8r"
    },
    {
        "test": "PSTAT130",
        "description": "fill l8r"
    },
    {
        "test": "PSTAT160A",
        "description": "fill l8r"
    },
    {
        "test": "PSTAT160B",
        "description": "fill l8r"
    },
    {
        "test": "ENGR101",
        "description": "fill l8r"
    },
]

const valuePairs = [
    [
        "CS16",
        "CS24"
    ],
    [
        "MATH3A",
        "CS16"
    ],
    [
        "MATH3B",
        "CS24"
    ],
    [
        "MATH4A",
        "CS40"
    ],
    [
        "MATH4A",
        "CS64"
    ],
    [
        "MATH6A",
        "CS111"
    ],
    [
        "PSTAT120A",
        "CS130A"
    ],
    [
        "4B",
        "140"
    ],
    [
        "6A",
        "140"
    ],
    [
        "PSTAT120A",
        "176A"
    ],
    [
        "120A",
        "178"
    ],
    [
        "CS24",
        "CS32"
    ],
    [
        "CS32",
        "CS130A"
    ],
    [
        "CS16",
        "CS40"
    ],
    [
        "CS40",
        "CS130A"
    ],
    [
        "CS32",
        "CS48"
    ],
    [
        "CS32",
        "CS56"
    ],
    [
        "CS16",
        "CS64"
    ],
    [
        "CS24",
        "CS111"
    ],
    [
        "CS130A",
        "CS130B"
    ],
    [
        "CS40",
        "CS138"
    ],
    [
        "CS130A",
        "CS140"
    ],
    [
        "CS32",
        "CS154"
    ],
    [
        "CS48",
        "CS154"
    ],
    [
        "CS64",
        "CS154"
    ],
    [
        "CS64",
        "CS160"
    ],
    [
        "CS130A",
        "CS160"
    ],
    [
        "CS130A",
        "CS162"
    ],
    [
        "CS138",
        "CS162"
    ],
    [
        "CS130A",
        "CS165A"
    ],
    [
        "CS130A",
        "CS165B"
    ],
    [
        "CS130A",
        "CS170"
    ],
    [
        "CS154",
        "CS170"
    ],
    [
        "CS130A",
        "CS171"
    ],
    [
        "CS130A",
        "CS174A"
    ],
    [
        "CS32",
        "CS176A"
    ],
    [
        "CS176A",
        "CS176B"
    ],
    [
        "CS176B",
        "CS176C"
    ],   
    [
        "CS170",
        "CS177"
    ],    
    [
        "CS24",
        "CS178"
    ],    
    [
        "CS40",
        "CS178"
    ],  
    [
        "CS130A",
        "CS180"
    ],
    [
        "CS56",
        "CS184"
    ],
    [
        "CS56",
        "CS189A"
    ],
    [
        "CS189A",
        "CS189B"
    ],
]