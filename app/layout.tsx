import Cotext from "./context/UseContext";
import "./globals.css";
import Query from "./hook/Query";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <Cotext>
          <Query>{children}</Query>
        </Cotext>
      </body>
    </html>
  );
}
