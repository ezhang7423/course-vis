const courses = [
    {
        "text": "2A",
        "description": "Calculus with Algebra and Trigonometry"
    },
    {
        "text": "2B",
        "description": "Calculus with Algebra and Trigonometry"
    },
    {
        "text": "4A",
        "description": "Linear Algebra with Applications"
    },
    {
        "text": "4B",
        "description": "Differential Equations"
    },
    {
        "text": "6A",
        "description": "Vector Calculus with Applications, First Course"
    },
    {
        "text": "6B",
        "description": "Vector Calculus with Applications, Second Course"
    },
    {
        "text": "8",
        "description": "Transition to Higher Mathematics",
        "optionalPrerequistes": [
            "4A",
            "4B",
            "6A"
        ]
    },
    {
        "text": "108A",
        "description": "Introduction to Linear Algebra"
    },
    {
        "text": "108B",
        "description": "Introduction to Linear Algebra"
    },
    {
        "text": "111A",
        "description": "Introduction to Abstract Algebra"
    },
    {
        "text": "111B",
        "description": "Abstract Algebra"
    }
]
const valuePairs = [
    [
        "2A",
        "2B"
    ],
    [
        "2B",
        "4A"
    ],
    [
        "4A",
        "4B"
    ],
    [
        "4A",
        "6A",
        
    ],
    [
        "4A",
        "8",
        "optbranch1"
    ],
    [
        "4A",
        "108A"
    ],
    [
        "6A",
        "6B"
    ],
    [
        "6A",
        "8",
        "optbranch1"
    ],
    [
        "4B",
        "8",
        "optbranch1"
    ],
    [
        "8",
        "108A"
    ],
    [
        "108A",
        "108B"
    ],
    [
        "108A",
        "111A"
    ],
    [
        "111A",
        "111B"
    ]
]