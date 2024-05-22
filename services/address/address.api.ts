export const getProvinces = async () => {
  try {
    const response = await fetch(
      "https://api.mysupership.vn/v1/partner/areas/province",
      {
        method: "GET",
      }
    );

    const data = await response.json();
    if (data && data.results) {
      const provincesData = data.results.map((province: any) => ({
        label: province.name,
        value: province.code,
      }));
      return provincesData;
    }
  } catch (error) {
    console.error("Error fetching provinces:", error);
  }
};

export const getDistricts = async (provinceId: any) => {
  try {
    if (!provinceId) return; 

    const response = await fetch(
      `https://api.mysupership.vn/v1/partner/areas/district?province=${provinceId}`,
      {
        method: "GET",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch districts data");
    }

    const data = await response.json();
    if (data && data.results) {
      const districtsData = data.results.map((district: any) => ({
        label: district.name,
        value: district.code,
      }));
      return districtsData;
    }
  } catch (error) {
    console.error("Error fetching districts:", error);
  }
};

export const getWards = async (districtId: any) => {
  try {
    const response = await fetch(
      `https://api.mysupership.vn/v1/partner/areas/commune?district=${districtId}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetchwards data");
    }

    const data = await response.json();
    if (data && data.results) {
      const wardsData = data.results.map((ward: any) => ({
        label: ward.name,
        value: ward.code,
      }));
      return wardsData;
    }
  } catch (error) {
    console.error("Error fetchingwards:", error);
  }
};
