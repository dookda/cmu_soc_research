<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor xmlns="http://www.opengis.net/sld" xmlns:se="http://www.opengis.net/se" xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.1.0/StyledLayerDescriptor.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ogc="http://www.opengis.net/ogc" version="1.1.0">
  <NamedLayer>
    <se:Name>cm_forest_use</se:Name>
    <UserStyle>
      <se:Name>cm_forest_use</se:Name>
      <se:FeatureTypeStyle>
        <se:Rule>
          <se:Name>พื้นที่ป่าที่เหมาะสมต่อการเกษตรกรรม</se:Name>
          <se:Description>
            <se:Title>พื้นที่ป่าที่เหมาะสมต่อการเกษตรกรรม</se:Title>
          </se:Description>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>for_th</ogc:PropertyName>
              <ogc:Literal>พื้นที่ป่าที่เหมาะสมต่อการเกษตรกรรม</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <se:PolygonSymbolizer>
            <se:Fill>
              <se:SvgParameter name="fill">#fc8d59</se:SvgParameter>
            </se:Fill>
          </se:PolygonSymbolizer>
        </se:Rule>
        <se:Rule>
          <se:Name>พื้นที่ป่าเพื่อการอนุรักษ์</se:Name>
          <se:Description>
            <se:Title>พื้นที่ป่าเพื่อการอนุรักษ์</se:Title>
          </se:Description>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>for_th</ogc:PropertyName>
              <ogc:Literal>พื้นที่ป่าเพื่อการอนุรักษ์</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <se:PolygonSymbolizer>
            <se:Fill>
              <se:SvgParameter name="fill">#99d594</se:SvgParameter>
            </se:Fill>
          </se:PolygonSymbolizer>
        </se:Rule>
        <se:Rule>
          <se:Name>พื้นที่ป่าเพื่อเศรษฐกิจ</se:Name>
          <se:Description>
            <se:Title>พื้นที่ป่าเพื่อเศรษฐกิจ</se:Title>
          </se:Description>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>for_th</ogc:PropertyName>
              <ogc:Literal>พื้นที่ป่าเพื่อเศรษฐกิจ</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <se:PolygonSymbolizer>
            <se:Fill>
              <se:SvgParameter name="fill">#e6f598</se:SvgParameter>
            </se:Fill>
          </se:PolygonSymbolizer>
        </se:Rule>
      </se:FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>