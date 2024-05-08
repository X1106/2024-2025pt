<template>
<v-container style="max-width:1200px;">
    <v-row  align-content="center" style="height: 650px;">
        <v-col cols="12" xl="4" lg="4" md="4" sm="12" > 
                <h1 class="text-h2 ">Creator Page</h1>
                <p class="ml-1">＠kotaro takano</p>
        </v-col>
    </v-row>
    <v-row align-content="center" justify="center" class=" mb-16">
        <v-col class="  px-md-4" cols="12" xl="11" lg="11" md="16" sm="12" >
        <h2 class="text-h4 font-weight-medium mb-1" >News</h2>
            <v-list lines="two">
                <v-list-item>
                <v-list-item-title>2023.12.15</v-list-item-title>
                <v-list-item-subtitle>テストサイトを公開しました<v-icon x-large >mdi-brush</v-icon></v-list-item-subtitle>
                <v-divider class="mb-3" ></v-divider>
                </v-list-item>
            </v-list>
            <div class="d-flex" justify="end" style="height: 90px;">
                <v-btn icon="" size="x-large" class=" ml-auto">
                    <router-link style="text-decoration: none; color: inherit;" class="text-body-2 font-weight-black" to="/article">More</router-link>
                </v-btn>
            </div>
        </v-col>
    </v-row> 
    <v-sheet  min-height="700" class=" mb-16">
    <v-row align-content="center" justify="center">
        <v-col  cols="11"  xl="6" lg="6" md="6" sm="11" class="px-md-16 pb-md-16" >
            <v-row>
                <v-col   cols="12"  xl="12" lg="12" md="12" sm="12" >
                    <v-card class="mx-auto" >
                        <v-img src="https://web-editor.tokyo/wp-content/uploads/2024/01/banner6.png" max-width="800" height="auto" cover></v-img>
                    </v-card>
                </v-col>
                <v-col  cols="6"  xl="6" lg="6" md="6" sm="6" >
                    <v-img src="https://web-editor.tokyo/wp-content/uploads/2024/01/banner1.jpg" max-width="302.4" height="auto" cover></v-img>
                </v-col>
                <v-col class="mb-4"   cols="6"  xl="6" lg="6" md="6" sm="6" >
                    <v-img src="https://web-editor.tokyo/wp-content/uploads/2024/01/banner2.jpg" max-width="302.4"  height="auto"  cover></v-img>
                </v-col>
                <v-col  class="mb-9" cols="12"  xl="12" lg="12" md="12" sm="12" >
                    <div align="center">
                        <v-btn href="https://editor-web.tokyo/" target="_blank" color="black" class=" white--text"  height="50" width="90%" variant="outlined">参考TOPページを確認する</v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12" xl="6" lg="6" md="6" sm="12" class=" px-md-9" >
            <h2 class="text-h4 font-weight-medium mb-1" >Design</h2>
            <p class="Subtitle1 font-weight-thin mb-2">デザイン</p>
            <v-divider class="mb-6"></v-divider>
            <p  class="text-body-2 mb-7">
                独習の駆け出しWEBデザイナーから歩みをすすめ、WEBディレクターとして「手を動かす効果測定」などの経験や、ユーザー・インターフェース・SEO対策などの対応力をつけるために、情報整理にとどまらないWEBメカニズムやWEBマーケティングを考慮した、デザイン設計をご提供できるようにとりくませていただいております。ポートフォリオの為に制作した参考デザインになりますが、こちらの資料を送らせていただきますのでご確認いただければ幸いです。
            </p>
            <p class="font-weight-black mb-1">Use Tools</p>
            <p  class="text-body-2  mb-3">Adobe Illustrator / Adobe Photoshop / Adobe XD / Figma</p>
            <p class="font-weight-black mb-1">experience</p>
            <p  class="text-body-2  mb-2"> 主なとりくみや制作物はこちら</p>
            <v-table>
                <tbody>
                        <tr v-for="item in todohuken1" :key="item.name1">
                            <td><v-icon x-large >mdi-check-bold</v-icon>　{{ item.name1 }}
                                </td>
                                <th class="text-left">
                            </th>
                        </tr>
                    </tbody>
            </v-table>
        </v-col>
    </v-row>
    </v-sheet>
        <v-sheet  min-height="750" class=" mb-16">
        <v-row align-content="center" justify="center"> 
            <v-col  class="px-md-16 pt-md-7" cols="11"  xl="6" lg="6" md="6" sm="11" >
                <v-row>
                <v-col class="mb-5"  cols="12"  xl="12" lg="12" md="12" sm="12"  >
                        <v-img src="https://web-editor.tokyo/wp-content/uploads/2024/01/banner5.png" max-width="800" height="auto" cover></v-img>
                </v-col>
                <v-col  cols="7"  xl="7" lg="7" md="7" sm="7" >
                    <v-img src="https://web-editor.tokyo/wp-content/uploads/2024/01/banner4.png" max-width="460" height="auto" cover></v-img>
                </v-col>
                <v-col class="mb-9"   cols="5"  xl="5" lg="5" md="5" sm="5" >
                    <v-img src="https://web-editor.tokyo/wp-content/uploads/2024/01/banner3.png" max-width="300"  height="auto"  cover></v-img>
                </v-col>
            </v-row>
            </v-col>
            <v-col cols="12" xl="6" lg="6" md="6" sm="12" id="element" class=" px-md-9">
                    <h2 class="text-h4 font-weight-medium mb-1"  >Engineer</h2>
                    <p class="Subtitle1 font-weight-thin mb-2">エンジニア</p>
                    <v-divider class="mb-6"></v-divider>
                    <p  class="text-body-2 mb-7">
                        主にコーダーとして活動しておりましたが、昨年よりフロントエンジニアとして「Vue.js」によるチーム開発の経験させていただいております。まだまだ、エンジニアとしては未熟者ですが、様々な場面でもお役立ちできるようにエクセルやGUI操作のツールではなかなかできない、Microsoftによる事務処理自動化やPythonによるテキストデータ操作からJavaScriptのWEBメカニズム学習を積極的にとりくんでおります。
                    </p>
                    <p class="font-weight-black mb-1">Use Tools</p>
                    <p  class="text-body-2  mb-2"> HTML・CSS / JavaScript / My SQL / Python</p>
                    <p class="font-weight-black mb-1">Use Tools</p>
                    <p  class="text-body-2  mb-2">GitHub / Docker  / GRC / Looker Studio / power Automate / power BI</p>
                    <p class="font-weight-black mb-1">experience</p>
                    <p  class="text-body-2  mb-2"> 主なとりくみや制作物はこちら</p>
                    <v-table>
                        <tbody>
                            <tr v-for="item in todohuken2" :key="item.name2">
                                <td><v-icon x-large >mdi-check-bold</v-icon>{{ item.name2 }}
                                    </td>
                                    <th class="text-left">
                                </th>
                            </tr>
                        </tbody>
                    </v-table>
            </v-col>
        </v-row>
        </v-sheet>
        <v-sheet min-height="600" width="100%"  >
    <v-row align-content="center"  justify="center" class="bg-grey-lighten-5 blue" >
        <v-col  cols="12"  xl="6" lg="6" md="6" sm="12" class=" px-md-12">
        </v-col>
        <v-col cols="12" xl="10" lg="10" md="10" sm="12" class=" pt-md-16 px-md-9" >
            <h2 class="text-h4 font-weight-medium mb-5 px-md-3" >Direction</h2>
            <p class="text-body-2 mb-2 px-md-3">
                昨今のデジタル普及によりデジタルマーケティングへのとりくみや考え方は、十人十色であると思っております。急激に変わりゆく情報社会の中で「集客・CVR・リピート数」などの改善には、データを掴みとり分析するエンジニア力が必要であり、正しい情報を伝える為のデザイン力が必要不可欠であると考えております。技術者と肩を並べて歩み「戦略と戦術」の提案のなかに、意義のあるPDCAサイクルとともに時代に流されない土台を築かせていただきます。
            </p>
            </v-col>
            <v-col  cols="12"  xl="5" lg="5" md="5" sm="12" class=" px-md-12">    
            <p class="font-weight-black mb-4">About</p>
                <p class="font-weight-black mb-1">Step.1 2018 - 2020</p>
            <p  class="text-body-2  mb-3">企業の商品やイベントグッツの制作担当として勤務</p>
            <p class="font-weight-black mb-1">Step.2 2020 - 2022</p>
            <p  class="text-body-2  mb-3">フリーデザイナーとして活動を開始</p>
            <p class="font-weight-black mb-1">Step.3 2022 - 2024</p>
            <p  class="text-body-2  mb-1">医療系広告代理店の制作部門にて</p>
            <p  class="text-body-2  mb-1">ディレクター・フロントエンジニアとして勤務</p>

        </v-col>
            <v-col  cols="12"  xl="5" lg="5" md="5" sm="12" class=" px-md-12">
                <p class="font-weight-black mb-1">Use Tools</p>
                <p  class="text-body-2  mb-1">Google Analytics / Google Tag Manager / Search Console</p>
                <p  class="text-body-2  mb-3">Microsoft Clarity / Synergy! / ahrefs  / GRC / Looker Studio</p>
                <p class="font-weight-black mb-1">Professional associations</p>
                <p  class="text-body-2  mb-1">2023.7- データサイエンティスト協会 / 一般会員</p>
                <p  class="text-body-2  mb-3">2023.7- 人間中心設計推進機構 / 一般会員</p>
                <p class="font-weight-black mb-1">experience</p>
                <p  class="text-body-2  mb-1">ユーザーアクションに基づくCVR改善 / キーワード・内部施策によるSEO対策 / 効果測定・A/Bテストによるリピート改善 等</p>
            </v-col>
            <v-col cols="12" xl="11" lg="11" md="11" sm="12" class=" pt-md-16 px-md-9" >   
            </v-col>
    </v-row>
    </v-sheet>
    </v-container>
</template>
<script>
export default {

  data () {
    return {
        todohuken: [
        {name: 'ユーザーアクションに基づくCVR改善 / キーワード・内部施策によるSEO対策 / 効果測定・A/Bテストによるリピート改善 等'},                      
      ],
        todohuken1: [
        {name1: 'WEBサイト・メルマガデザイン'},
        {name1: 'バナー・サムネイル画像制作'},
        {name1: '名刺制作・グラフ画像制作'},                          
      ],
        todohuken2: [
        {name2: 'HTMl・CSS - サイト構築'},
        {name2: 'Vue - サイト構築（ヘッドレスCMS）'},
        {name2: 'Python - Text Mining'},
        {name2: 'Share Point・Power BI'},                             
      ],
    }
  },
}
</script>


