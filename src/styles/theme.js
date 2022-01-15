const theme = {
  navFont: 'color: #333333; font-size: 14px; font-weight: 600;',
  linkReset: 'text-decoration: none; color: #333333',
  flexMinin: (direction = 'row', justify = 'center', align = 'center') => `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `,
};

export default theme;
