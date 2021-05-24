import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AddCorpotation from "./AddCorpotationHakkimizda";
import AddCorpotationVergi from "./AddCorpotationVergi";
import AddCorpotationTarihce from "./AddCorpotationTarihce";
import AddCorporationIban from "./AddCorporationIban";

function CorpPage() {
  return (
    <div className="corp-page">
      <Tabs>
        <TabList>
          <Tab>Kurumsal Sayfası</Tab>
          <Tab>Hakkımızda Sayfası</Tab>
          <Tab>Tarihçe Sayfası</Tab>
          <Tab>Vergi Sayfası</Tab>
          <Tab>Hesap Numarası</Tab>
        </TabList>

        <TabPanel>Lütfen Düzenlenecek Sayfayı Seçiniz</TabPanel>
        <TabPanel>
          <AddCorpotation />
        </TabPanel>
        <TabPanel>
          <AddCorpotationTarihce />
        </TabPanel>
        <TabPanel>
         <AddCorpotationVergi />
        </TabPanel>
        <TabPanel>
         <AddCorporationIban />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default CorpPage;
