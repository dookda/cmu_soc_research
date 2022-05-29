<?xml version="1.0" encoding="utf-8"?>
<StyledLayerDescriptor version="1.0.0"
  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd"
  xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"
  xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

  <NamedLayer>
    <Name>_road</Name>
    <UserStyle>
      <Title>A violet line style</Title>
      <FeatureTypeStyle>
        <Rule>
          <Name>a</Name>
          <Title>ถนนสายหลัก</Title>
          <ogc:Filter>
            <PropertyIsEqualTo>
               <PropertyName>type_road</PropertyName>
               <Literal>ถนนสายหลัก</Literal>
            </PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#993404</CssParameter>
              <CssParameter name="stroke-width">1</CssParameter>
            </Stroke>
          </LineSymbolizer>
        </Rule>

        <Rule>
          <Name>a</Name>
          <Title>ถนนสายรอง</Title>
          <ogc:Filter>
            <PropertyIsEqualTo>
               <PropertyName>type_road</PropertyName>
               <Literal>ถนนสายรอง</Literal>
            </PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#fe9929</CssParameter>
              <CssParameter name="stroke-width">0.5</CssParameter>
            </Stroke>
          </LineSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>