export const styles = {
  lightMode: {
    //Button
    button: {
      default: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        borderWidth: 1.5,
      },

      //sizes
      large: {
        height: 52,
      },
      medium: {
        height: 48,
      },
      small: {
        height: 37,
      },

      //types & states
      primary: {
        default: {
          backgroundColor: '#005BAA',
          borderColor: '#005BAA',
        },
        disabled: {
          backgroundColor: '#D8D8D8',
          borderColor: '#D8D8D8',
        },
        active: {
          backgroundColor: '#004988',
          borderColor: '#004988',
        },
      },

      secondary: {
        default: {
          backgroundColor: '#005BAA',
          borderColor: '#005BAA',
        },
        disabled: {
          backgroundColor: '#D8D8D8',
          borderColor: '#D8D8D8',
        },

        active: {
          backgroundColor: '#80ADD4',
          borderColor: '#80ADD4',
        },
      },
    },

    //Title
    title: {
      //sizes
      small: {
        fontSize: 14,
        height: 14 * 1.33,
        marginLeft: 16,
        marginRight: 16,
      },
      medium: {
        fontSize: 18,
        height: 18 * 1.33,
        marginLeft: 16,
        marginRight: 16,
      },
      large: {
        fontSize: 20,
        marginLeft: 16,
        marginRight: 16,
      },

      //types & states
      primary: {
        default: {color: '#fff'},
        disabled: {color: '#fff'},
        active: {color: '#fff'},
      },
      secondary: {
        default: {color: '#fff'},
        disabled: {color: '#fff'},
        active: {color: '#fff'},
      },
    },
  },
};
