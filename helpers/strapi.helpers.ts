export const getFilterObjectByName = (filterName: string) => ({
    categories: {
      name: {
        $eqi: filterName.toUpperCase(),
      },
    },
  })