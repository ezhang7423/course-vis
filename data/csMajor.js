const courses = [
    {
        "text": "CS8",
        "description": "Introduction to Computer Science"
    },
    {
        "text": "CS16",
        "description": "Problem Solving with Computers I"
    },
    {
        "text": "CS24",
        "description": "Problem Solving with Computers II"
    },
    {
        "text": "CS32",
        "description": "Object Oriented Design and Implementation"
    },
    {
        "text": "CS40",
        "description": "Foundations of Computer Science"
    },
    {
        "text": "CS48",
        "description": "Computer Science Project"
    },
    {
        "text": "CS56",
        "description": "Advanced Applications Programming"
    },
    {
        "text": "CS64",
        "description": "Computer Organization and Logic Design"
    },
    {
        "text": "CS111",
        "description": "Introduction to Computational Science"
    },
    {
        "text": "CS140",
        "description": "Parallel Scientific Computing"
    },
    {
        "text": "CS130A",
        "description": "Data Structures and Algorithms I"
    },
    {
        "text": "CS130B",
        "description": "Data Structures and Algorithms II"
    },
    {
        "text": "CS138",
        "description": "Automata and Formal Languages"
    },
    {
        "text": "CS153A",
        "description": "Hardware/Software Interface"
    },
    {
        "text": "CS154",
        "description": "Computer Architecture"
    },
    {
        "text": "CS160",
        "description": "Translation of Programming Languages"
    },
    {
        "text": "CS162",
        "description": "Programming Languages"
    },
    {
        "text": "CS170",
        "description": "Operating Systems"
    },
    {
        "text": "CS171",
        "description": "Distributed Systems"
    },
    {
        "text": "CS174A",
        "description": "Fundamentals of Database Systems"
    },
    {
        "text": "CS176A",
        "description": "Introduction to Computer Communication Networks"
    },
    {
        "text": "CS176B",
        "description": "Network Computing"
    },
    {
        "text": "CS176C",
        "description": "Advanced Topics in Internet Computing"
    },
    {
        "text": "CS177",
        "description": "Computer Security"
    },
    {
        "text": "CS178",
        "description": "Introduction to Cryptography"
    },
    {
        "text": "CS180",
        "description": "Computer Graphics"
    },
    {
        "text": "CS181",
        "description": "Introduction to Computer Vision"
    },
    {
        "text": "CS184",
        "description": "Mobile Application Development"
    },
    {
        "text": "CS185",
        "description": "Human-Computer Interaction"
    },
    {
        "text": "CS189A",
        "description": "Senior Computer Systems Project"
    },
    {
        "text": "CS189B",
        "description": "Senior Computer Systems Project"
    },
    {
        "text": "CS165A",
        "description": "Artificial Intelligence"
    },
    {
        "text": "CS165B",
        "description": "Machine Learning"
    },
    {
        "text": "CS190AA-ZZ",
        "description": "Special Topics in Computer Science"
    },
    {
        "text": "CS192",
        "description": "Projects in Computer Science"
    },
    {
        "text": "CS193",
        "description": "Internship in Industry"
    },
    {
        "text": "CS196",
        "description": "Undergraduate Research"
    },
    {
        "text": "CS199",
        "description": "Independent Studies in Computer Science"
    },
    {
        "text": "MATH3A",
        "description": "Calculus with Applications, First Course"
    },
    {
        "text": "MATH3B",
        "description": "Calculus with Applications, Second Course"
    },
    {
        "text": "MATH4A",
        "description": "Linear Algebra with Applications"
    },
    {
        "text": "MATH4B",
        "description": "Differential Equations"
    },
    {
        "text": "MATH6A",
        "description": "Vector Calculus with Applications, First Course"
    },
    {
        "text": "PSTAT120A",
        "description": "Probability and Statistics"
    },
    {
        "text": "PSTAT120B",
        "description": "Probability and Statistics"
    },
    {
        "text": "ENGR101",
        "description": "Ethics in Engineering"
    },
]

const valuePairs = [
    [
        "CS8",
        "CS16"
    ],
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
        "PSTAT120A",
        "PSTAT120B"

    ],
    [
        "MATH4B",
        "CS140"
    ],
    [
        "MATH6A",
        "CS140"
    ],
    [
        "PSTAT120A",
        "CS176A"
    ],
    [
        "PSTAT120A",
        "CS178"
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
        "CS130A",
        "CS165B"
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