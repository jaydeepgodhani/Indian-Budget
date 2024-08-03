const data = [
  {
    name: 'Budget',
    value: 48.21,
    children: [
      {
        name: 'Scheme Expenditure',
        value: 20.22,
        children: [
          {
            name: 'Central Sector Scheme',
            value: 15.16,
            children: [
              {
                name: 'General service',
                value: 2.15,
              },
              {
                name: 'Economic service',
                value: 7.85,
              },
              {
                name: 'Subsidy',
                value: 4.28,
                children: [
                  {
                    name: 'Fertilizer',
                    value: 1.64,
                  },
                  {
                    name: 'Food',
                    value: 2.05,
                  },
                  {
                    name: 'Petroleum',
                    value: 0.12,
                  },
                  {
                    name: 'Others',
                    value: 0.47,
                  }
                ]
              },
              {
                name: 'Social Services',
                value: 0.56,
              },
              {
                name: 'Others',
                value: 0.32,
              }
            ]
          },
          {
            name: 'Centrally Sponsored Scheme',
            value: 5.06,
          }
        ]
      },
      {
        name: 'Establishment Transfer and other',
        value: 27.99,
        children: [
          {
            name: 'Transfer to states',
            value: 5.24,
            children: [
              {
                name: 'Finance commision transfer',
                value: 1.32
              },
              {
                name: 'Other transfer',
                value: 3.92
              }
            ]
          },
          {
            name: 'Establishment Expenditure',
            value: 7.84,
            children: [
              {
                name: 'Salary',
                value: 1.62
              },
              {
                name: 'Pension',
                value: 2.43
              },
              {
                name: 'Other',
                value: 3.79
              }
            ]
          },
          {
            name: 'Others',
            value: 14.91,
            children: [
              {
                name: 'Interest Payment',
                value: 11.63
              },
              {
                name: 'Autonomous Bodies',
                value: 1.24
              },
              {
                name: 'Other',
                value: 2.04
              }
            ]
          }
        ]
      }
    ]
  }
];

export default data;