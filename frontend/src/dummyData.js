const dummyShifts = [
  {
    id: 1,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: Math.floor(Math.random() * 1000000),
    location: "Springvale",
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000, 
    status: "rejected"
  },
  {
    id: 2,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: Math.floor(Math.random() * 1000000),
    location: "Springvale",
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000, 
    status: "pending"
  },
  {
    id: 3,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: Math.floor(Math.random() * 1000000),
    location: "Springvale",
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000, 
    status: "approved"
  },
  {
    id: 4,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: Math.floor(Math.random() * 1000000),
    location: "Springvale",
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000, 
    status: "pending"
  },
  {
    id: 5,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: Math.floor(Math.random() * 1000000),
    location: "Springvale",
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000, 
    status: "approved"
  },
  {
    id: 6,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: Math.floor(Math.random() * 1000000),
    location: "Springvale",
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000, 
    status: "pending"
  },
  {
    id: 7,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: Math.floor(Math.random() * 1000000),
    location: "Springvale",
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000, 
    status: "approved"
  },
  {
    id: 8,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: Math.floor(Math.random() * 1000000),
    location: "Springvale",
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000, 
    status: "pending"
  },
  {
    id: 9,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: Math.floor(Math.random() * 1000000),
    location: "Springvale",
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000, 
    status: "rejected"
  },
  {
    id: 10,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: Math.floor(Math.random() * 1000000),
    location: "Springvale",
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000, 
    status: "approved"
  },
  {
    id: 11,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: Math.floor(Math.random() * 1000000),
    location: "Springvale",
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000, 
    status: "approved"
  },
  {
    id: 12,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: Math.floor(Math.random() * 1000000),
    location: "Springvale",
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000, 
    status: "approved"
  },
  {
    id: 13,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: Math.floor(Math.random() * 1000000),
    location: "Springvale",
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000, 
    status: "approved"
  },
  {
    id: 14,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: Math.floor(Math.random() * 1000000),
    location: "Springvale",
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000, 
    status: "approved"
  },
  {
    id: 15,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: Math.floor(Math.random() * 1000000),
    location: "Springvale",
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000, 
    status: "approved"
  },
  {
    id: 16,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: Math.floor(Math.random() * 1000000),
    location: "Springvale",
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000, 
    status: "approved"
  },
  {
    id: 17,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: Math.floor(Math.random() * 1000000),
    location: "Springvale",
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000, 
    status: "approved"
  },
  {
    id: 18,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: Math.floor(Math.random() * 1000000),
    location: "Springvale",
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000, 
    status: "approved"
  },
  {
    id: 19,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: Math.floor(Math.random() * 1000000),
    location: "Springvale",
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000, 
    status: "approved"
  },
  {
    id: 20,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: Math.floor(Math.random() * 1000000),
    location: "Springvale",
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000, 
    status: "approved"
  },
  {
    id: 21,
    employee: {
      type: 1,
      ref: 'Employee'
    },
    date: Math.floor(Math.random() * 1000000),
    location: "Springvale",
    startTime: 2000,
    endTime: 2000,
    standardMinutes: 120,
    overtimeMinutes: 60,
    doubleTimeMinutes: 60,
    totalPay: 2000, 
    status: "approved"
  },
]

export { dummyShifts }


// const managerSchema = 
// {
//   id: String,
//   email: String,
//   password: String
// }

// const employeeSchema = {
//   id: String,
//   name: String,
//   email: String,
//   password: String, // randomly generate a password upon creation and send emial to employee
//   location: [ String ],
//   standardRate: Number, // cents
//   business: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Business'
//   }
// }

// const shiftSchema = 
// {
//   id: String,
//   employee: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Employee'
//   },
//   date: Number,
//   location: String,
//   startTime: Number,
//   endTime: Number,
//   standardMinutes: Number,
//   overtimeMinutes: Number,
//   doubleTimeMinutes: Number,
//   totalPay: Number, // cents
//   status: String
// }

// const businessSchema = {
//   name: String,
//   address: String,
//   locations: [String],
//   overtimeMultiplier: Number,
//   doubleTimeMultiplier: Number,
//   manager: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Manager'
//   }
// }