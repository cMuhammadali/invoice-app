import { ConfigProvider } from "antd";

export const ThemeProvider = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            borderRadius: 4,
            paddingBlock: 14,
            colorBorder: "rgba(126, 136, 195, 1)",
          },
          Form: {
            labelFontSize: "16px",
            labelColor: "rgba(126, 136, 195, 1)"
          },
          Modal: {
            titleFontSize: 24
          }
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
