
const Html = `
<body id="ifj9">
    <h1 id="isun">Hello World Component!
    </h1>
    <div>
      <table border="1" cellpadding="3" cellspacing="0" width="100%" id="i1hl">
        <thead>
          <tr bgcolor="#c0c0c0">
            <td id="ibtx">
              <span><strong>Pos</strong></span>
            </td>
            <td colspan="2" id="i0ej">
              <span><strong>%G_Qty%</strong></span>
            </td>
            <td id="iwc73">
              <span><span id="iuz4b">Text</span></span>
            </td>
            <td id="i67tz">
              <strong>%G_Subtotal%</strong>
            </td>
            <td id="iccp5">
              <span><strong>%G_Tax% (%)</strong></span>
            </td>
            <td id="i4aeb">
              <span><strong>%G_Tax%</strong>
                (<strong>$CURRENCYCODE$</strong>)
              </span>
            </td>
            <td id="it1kt">
              <span><strong>%M_Total%</strong></span>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="11" id="inmti">#PRODUCTBLOC_START#
            </td>
          </tr>
          <tr>
            <td id="idwcb">$PRODUCTPOSITION$
            </td>
            <td align="right" valign="top" id="ismww">$PRODUCTQUANTITY$
            </td>
            <td align="left" valign="top" id="i3ppy">$PRODUCTUSAGEUNIT$
            </td>
            <td align="left" valign="top">$PRODUCTNAME$
            </td>
            <td align="right" valign="top" id="i7493">$PRODUCTTOTAL$
            </td>
            <td align="right" valign="top" id="i96oi">$PRODUCTVATPERCENT$
            </td>
            <td align="right" valign="top" id="ikb2p">$PRODUCTVATSUM$
            </td>
            <td align="right" valign="top" id="ia5ha">$PRODUCTTOTALSUM$
            </td>
          </tr>
          <tr>
            <td colspan="11" id="izojf">#PRODUCTBLOC_END#
            </td>
          </tr>
          <tr>
            <td colspan="7" id="if8jq">Subtotals
            </td>
            <td id="impp8">
              <span id="i8gcs">$TOTALWITHOUTVAT$</span>
            </td>
            <td id="ipzn1">
            </td>
            <td id="iolwc">
              <span id="iwrys">$VAT$</span>
            </td>
            <td id="irgqz">$SUBTOTAL$
            </td>
          </tr>
          <tr>
            <td colspan="10" id="iab74">Total with TAX
            </td>
            <td id="i182o">$TOTALWITHVAT$
            </td>
          </tr>
          <tr>
            <td colspan="10" id="ipw1r">
              <span id="ikyxk">%G_TOTAL% </span>
              <strong>($CURRENCYCODE$)</strong>
            </td>
            <td nowrap="nowrap" id="ihmki">
              <strong>$TOTAL$</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
`


const Css = `
<style>
#i2k5{
    font-size:10px;
  }
  #ihsf{
    text-align:center;
  }
  #igczj{
    text-align:center;
  }
  #igork{
    text-align:center;
  }
  #iw8te{
    font-weight:bold;
  }
  #iynyf{
    text-align:center;
  }
  #imzhe{
    text-align:center;
  }
  #i47e8{
    text-align:center;
  }
  #i414v{
    text-align:center;
  }
  #ixjry{
    text-align:center;
    vertical-align:top;
  }
  #ibagx{
    TEXT-ALIGN:center;
  }
  #iuqgk{
    text-align:right;
  }
  #ia7tr{
    text-align:right;
  }
  #idqch{
    text-align:right;
  }
  #inrkd{
    text-align:right;
  }
  #iquvc{
    text-align:left;
  }
  #iipjb{
    text-align:right;
  }
  #ioyw7{
    text-align:right;
  }
  #i0qet{
    text-align:right;
  }
  #it67q{
    text-align:right;
  }
  #icnfk{
    text-align:right;
  }
  #i1jvz{
    text-align:right;
  }
  #iggxo{
    text-align:left;
  }
  #icq0s{
    text-align:right;
  }
  #ikzh5{
    text-align:left;
  }
  #i3z9i{
    font-weight:bold;
  }
  #i2c6i{
    text-align:right;
  }
</style>
`


module.exports={
    Html,
    Css
}