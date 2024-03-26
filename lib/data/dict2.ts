import { Priority } from '@/common/constant';
import type { Pattern } from '../../lib/common/ac';
const DICT2: { [prop: string]: string } = {
  这个: 'zhè ge',
  成为: 'chéng wéi',
  认为: 'rèn wéi',
  作为: 'zuò wéi',
  部分: 'bù fen',
  要求: 'yāo qiú',
  应该: 'yīng gāi',
  增长: 'zēng zhǎng',
  提供: 'tí gōng',
  觉得: 'jué de',
  任务: 'rèn wu',
  那个: 'nà ge',
  称为: 'chēng wéi',
  为主: 'wéi zhǔ',
  了解: 'liǎo jiě',
  处理: 'chǔ lǐ',
  皇上: 'huáng shang',
  只要: 'zhǐ yào',
  大量: 'dà liàng',
  力量: 'lì liàng',
  几乎: 'jī hū',
  干部: 'gàn bù',
  目的: 'mù dì',
  行为: 'xíng wéi',
  只见: 'zhǐ jiàn',
  认识: 'rèn shi',
  市长: 'shì zhǎng',
  师父: 'shī fu',
  调查: 'diào chá',
  重新: 'chóng xīn',
  分为: 'fēn wéi',
  知识: 'zhī shi',
  导弹: 'dǎo dàn',
  行业: 'háng yè',
  质量: 'zhì liàng',
  银行: 'yín háng',
  参与: 'cān yù',
  充分: 'chōng fèn',
  尽管: 'jǐn guǎn',
  生长: 'shēng zhǎng',
  数量: 'shù liàng',
  应当: 'yīng dāng',
  院长: 'yuàn zhǎng',
  强调: 'qiáng diào',
  只能: 'zhǐ néng',
  音乐: 'yīn yuè',
  以为: 'yǐ wéi',
  处于: 'chǔ yú',
  部长: 'bù zhǎng',
  蒙古: 'měng gǔ',
  只有: 'zhǐ yǒu',
  适当: 'shì dàng',
  只好: 'zhǐ hǎo',
  成长: 'chéng zhǎng',
  高兴: 'gāo xìng',
  不了: 'bù liǎo',
  产量: 'chǎn liàng',
  胖子: 'pàng zi',
  显得: 'xiǎn de',
  只是: 'zhǐ shì',
  似的: 'shì de',
  率领: 'shuài lǐng',
  改为: 'gǎi wéi',
  不禁: 'bù jīn',
  成分: 'chéng fèn',
  答应: 'dā ying',
  少年: 'shào nián',
  兴趣: 'xìng qù',
  太监: 'tài jian',
  休息: 'xiū xi',
  校长: 'xiào zhǎng',
  更新: 'gēng xīn',
  合同: 'hé tong',
  喝道: 'hè dào',
  重庆: 'chóng qìng',
  重建: 'chóng jiàn',
  使得: 'shǐ de',
  审查: 'shěn chá',
  累计: 'lěi jì',
  给予: 'jǐ yǔ',
  行情: 'háng qíng',
  极为: 'jí wéi',
  冠军: 'guàn jūn',
  仿佛: 'fǎng fú',
  头发: 'tóu fa',
  投降: 'tóu xiáng',
  家长: 'jiā zhǎng',
  仔细: 'zǐ xì',
  要是: 'yào shi',
  将领: 'jiàng lǐng',
  含量: 'hán liàng',
  更为: 'gèng wéi',
  积累: 'jī lěi',
  地处: 'dì chǔ',
  县长: 'xiàn zhǎng',
  少女: 'shào nǚ',
  路上: 'lù shang',
  只怕: 'zhǐ pà',
  能量: 'néng liàng',
  储量: 'chǔ liàng',
  供应: 'gōng yìng',
  挑战: 'tiǎo zhàn',
  西藏: 'xī zàng',
  记得: 'jì de',
  总量: 'zǒng liàng',
  当真: 'dàng zhēn',
  将士: 'jiàng shì',
  差别: 'chā bié',
  较为: 'jiào wéi',
  长老: 'zhǎng lǎo',
  大夫: 'dài fu',
  差异: 'chā yì',
  懂得: 'dǒng de',
  尽量: 'jǐn liàng',
  模样: 'mú yàng',
  的确: 'dí què',
  为首: 'wéi shǒu',
  便宜: 'pián yi',
  更名: 'gēng míng',
  石头: 'shí tou',
  州长: 'zhōu zhǎng',
  为止: 'wéi zhǐ',
  漂亮: 'piào liang',
  炮弹: 'pào dàn',
  藏族: 'zàng zú',
  角色: 'jué sè',
  当作: 'dàng zuò',
  尽快: 'jǐn kuài',
  人为: 'rén wéi',
  重复: 'chóng fù',
  胡同: 'hú tòng',
  差距: 'chā jù',
  弟兄: 'dì xiong',
  大将: 'dà jiàng',
  睡觉: 'shuì jiào',
  一觉: 'yí jiào',
  团长: 'tuán zhǎng',
  队长: 'duì zhǎng',
  区长: 'qū zhǎng',
  难得: 'nán dé',
  丫头: 'yā tou',
  会长: 'huì zhǎng',
  弟弟: 'dì di',
  王爷: 'wáng ye',
  重量: 'zhòng liàng',
  誉为: 'yù wéi',
  家伙: 'jiā huo',
  华山: 'huà shān',
  椅子: 'yǐ zi',
  流量: 'liú liàng',
  长大: 'zhǎng dà',
  勉强: 'miǎn qiǎng',
  会计: 'kuài jì',
  过分: 'guò fèn',
  济南: 'jǐ nán',
  调动: 'diào dòng',
  燕京: 'yān jīng',
  少将: 'shào jiàng',
  中毒: 'zhòng dú',
  晓得: 'xiǎo de',
  变更: 'biàn gēng',
  打更: 'dǎ gēng',
  认得: 'rèn de',
  苹果: 'píng guǒ',
  念头: 'niàn tou',
  挣扎: 'zhēng zhá',
  三藏: 'sān zàng',
  剥削: 'bō xuē',
  丞相: 'chéng xiàng',
  少量: 'shǎo liàng',
  寻思: 'xún si',
  夺得: 'duó dé',
  干线: 'gàn xiàn',
  呼吁: 'hū yù',
  戏曲: 'xì qǔ',
  处罚: 'chǔ fá',
  长官: 'zhǎng guān',
  柏林: 'bó lín',
  亲戚: 'qīn qi',
  身分: 'shēn fèn',
  胳膊: 'gē bo',
  着手: 'zhuó shǒu',
  炸弹: 'zhà dàn',
  咳嗽: 'ké sou',
  叶子: 'yè zi',
  外长: 'wài zhǎng',
  供给: 'gōng jǐ',
  师长: 'shī zhǎng',
  变量: 'biàn liàng',
  应有: 'yīng yǒu',
  下载: 'xià zài',
  乐器: 'yuè qì',
  间接: 'jiàn jiē',
  底下: 'dǐ xià',
  打扮: 'dǎ bàn',
  子弹: 'zǐ dàn',
  弹药: 'dàn yào',
  热量: 'rè liàng',
  削弱: 'xuē ruò',
  骨干: 'gǔ gàn',
  容量: 'róng liàng',
  模糊: 'mó hu',
  转动: 'zhuàn dòng',
  称呼: 'chēng hu',
  科长: 'kē zhǎng',
  处置: 'chǔ zhì',
  歌曲: 'gē qǔ',
  着重: 'zhuó zhòng',
  着急: 'zháo jí',
  强迫: 'qiǎng pò',
  庭长: 'tíng zhǎng',
  首相: 'shǒu xiàng',
  喇嘛: 'lǎ ma',
  镇长: 'zhèn zhǎng',
  只管: 'zhǐ guǎn',
  重重: 'chóng chóng',
  免得: 'miǎn de',
  着实: 'zhuó shí',
  度假: 'dù jià',
  真相: 'zhēn xiàng',
  相貌: 'xiàng mào',
  处分: 'chǔ fèn',
  委屈: 'wěi qu',
  为期: 'wéi qī',
  伯伯: 'bó bo',
  圈子: 'quān zi',
  见识: 'jiàn shi',
  笼罩: 'lǒng zhào',
  与会: 'yù huì',
  都督: 'dū du',
  成都: 'chéng dū',
  六安: 'lù ān',
  都城: 'dū chéng',
  宰相: 'zǎi xiàng',
  较量: 'jiào liàng',
  对称: 'duì chèn',
  总长: 'zǒng zhǎng',
  相公: 'xiàng gong',
  空白: 'kòng bái',
  打量: 'dǎ liang',
  水分: 'shuǐ fèn',
  舌头: 'shé tou',
  没收: 'mò shōu',
  行李: 'xíng li',
  判处: 'pàn chǔ',
  散文: 'sǎn wén',
  处境: 'chǔ jìng',
  孙子: 'sūn zi',
  拳头: 'quán tou',
  打发: 'dǎ fā',
  组长: 'zǔ zhǎng',
  骨头: 'gǔ tou',
  宁可: 'nìng kě',
  更换: 'gēng huàn',
  薄弱: 'bó ruò',
  还原: 'huán yuán',
  重修: 'chóng xiū',
  重来: 'chóng lái',
  同行: 'tóng háng',
  只顾: 'zhǐ gù',
  爱好: 'ài hào',
  馒头: 'mán tou',
  军长: 'jūn zhǎng',
  首长: 'shǒu zhǎng',
  厂长: 'chǎng zhǎng',
  司长: 'sī zhǎng',
  长子: 'zhǎng zǐ',
  强劲: 'qiáng jìng',
  恰当: 'qià dàng',
  头儿: 'tóu er',
  站长: 'zhàn zhǎng',
  折腾: 'zhē teng',
  相处: 'xiāng chǔ',
  统率: 'tǒng shuài',
  中将: 'zhōng jiàng',
  命中: 'mìng zhòng',
  名将: 'míng jiàng',
  木头: 'mù tou',
  动弹: 'dòng tan',
  地壳: 'dì qiào',
  干活: 'gàn huó',
  少爷: 'shào ye',
  水量: 'shuǐ liàng',
  补给: 'bǔ jǐ',
  尾巴: 'wěi ba',
  来得: 'lái de',
  好奇: 'hào qí',
  钥匙: 'yào shi',
  当做: 'dàng zuò',
  沉着: 'chén zhuó',
  哑巴: 'yǎ ba',
  车子: 'chē zi',
  上将: 'shàng jiàng',
  恶心: 'ě xīn',
  担子: 'dàn zi',
  应届: 'yīng jiè',
  行列: 'háng liè',
  主角: 'zhǔ jué',
  运转: 'yùn zhuǎn',
  兄长: 'xiōng zhǎng',
  格式: 'gé shì',
  正月: 'zhēng yuè',
  营长: 'yíng zhǎng',
  当成: 'dàng chéng',
  女婿: 'nǚ xu',
  咽喉: 'yān hóu',
  重阳: 'chóng yáng',
  化为: 'huà wéi',
  吐蕃: 'tǔ bō',
  钻进: 'zuān jìn',
  乐队: 'yuè duì',
  亮相: 'liàng xiàng',
  被子: 'bèi zi',
  舍得: 'shě de',
  杉木: 'shā mù',
  击中: 'jī zhòng',
  排长: 'pái zhǎng',
  假期: 'jià qī',
  分量: 'fèn liàng',
  数次: 'shù cì',
  提防: 'dī fáng',
  吆喝: 'yāo he',
  查处: 'chá chǔ',
  量子: 'liàng zǐ',
  里头: 'lǐ tou',
  调研: 'diào yán',
  伺候: 'cì hou',
  重申: 'chóng shēn',
  枕头: 'zhěn tou',
  拚命: 'pīn mìng',
  社长: 'shè zhǎng',
  归还: 'guī huán',
  批量: 'pī liàng',
  畜牧: 'xù mù',
  点着: 'diǎn zháo',
  甚为: 'shèn wéi',
  小将: 'xiǎo jiàng',
  着眼: 'zhuó yǎn',
  处死: 'chǔ sǐ',
  厌恶: 'yàn wù',
  鼓乐: 'gǔ yuè',
  树干: 'shù gàn',
  秘鲁: 'bì lǔ',
  大方: 'dà fāng',
  外头: 'wài tou',
  班长: 'bān zhǎng',
  星宿: 'xīng xiù',
  宁愿: 'nìng yuàn',
  钦差: 'qīn chāi',
  为数: 'wéi shù',
  勾当: 'gòu dàng',
  削减: 'xuē jiǎn',
  间谍: 'jiàn dié',
  埋怨: 'mán yuàn',
  结实: 'jiē shi',
  计量: 'jì liáng',
  淹没: 'yān mò',
  村长: 'cūn zhǎng',
  连长: 'lián zhǎng',
  自给: 'zì jǐ',
  武将: 'wǔ jiàng',
  温差: 'wēn chā',
  直奔: 'zhí bèn',
  供求: 'gōng qiú',
  剂量: 'jì liàng',
  道长: 'dào zhǎng',
  泄露: 'xiè lòu',
  王八: 'wáng ba',
  切割: 'qiē gē',
  间隔: 'jiàn gé',
  一晃: 'yì huǎng',
  长假: 'cháng jià',
  令狐: 'líng hú',
  为害: 'wéi hài',
  句子: 'jù zi',
  偿还: 'cháng huán',
  疙瘩: 'gē da',
  燕山: 'yān shān',
  堵塞: 'dǔ sè',
  夺冠: 'duó guàn',
  扎实: 'zhā shi',
  电荷: 'diàn hè',
  看守: 'kān shǒu',
  复辟: 'fù bì',
  郁闷: 'yù mèn',
  尽早: 'jǐn zǎo',
  切断: 'qiē duàn',
  指头: 'zhǐ tou',
  为生: 'wéi shēng',
  畜生: 'chù sheng',
  切除: 'qiē chú',
  着力: 'zhuó lì',
  着想: 'zhuó xiǎng',
  级差: 'jí chā',
  投奔: 'tóu bèn',
  棍子: 'gùn zi',
  含糊: 'hán hu',
  少妇: 'shào fù',
  兴致: 'xìng zhì',
  纳闷: 'nà mèn',
  干流: 'gàn liú',
  卷起: 'juǎn qǐ',
  扇子: 'shàn zi',
  更改: 'gēng gǎi',
  笼络: 'lǒng luò',
  喇叭: 'lǎ ba',
  载荷: 'zài hè',
  妥当: 'tuǒ dàng',
  为难: 'wéi nán',
  着陆: 'zhuó lù',
  燕子: 'yàn zi',
  干吗: 'gàn má',
  白发: 'bái fà',
  总得: 'zǒng děi',
  夹击: 'jiā jī',
  曝光: 'bào guāng',
  曲调: 'qǔ diào',
  相机: 'xiàng jī',
  叫化: 'jiào huà',
  角逐: 'jué zhú',
  啊哟: 'ā yō',
  载重: 'zài zhòng',
  长辈: 'zhǎng bèi',
  出差: 'chū chāi',
  垛口: 'duǒ kǒu',
  撇开: 'piē kāi',
  厅长: 'tīng zhǎng',
  组分: 'zǔ fèn',
  误差: 'wù chā',
  家当: 'jiā dàng',
  传记: 'zhuàn jì',
  个子: 'gè zi',
  铺设: 'pū shè',
  干事: 'gàn shì',
  杆菌: 'gǎn jūn',
  定量: 'dìng liàng',
  运载: 'yùn zài',
  会儿: 'huì er',
  酋长: 'qiú zhǎng',
  重返: 'chóng fǎn',
  差额: 'chā é',
  露面: 'lòu miàn',
  钻研: 'zuān yán',
  大城: 'dài chéng',
  上当: 'shàng dàng',
  销量: 'xiāo liàng',
  洋行: 'yáng háng',
  作坊: 'zuō fang',
  照相: 'zhào xiàng',
  哎呀: 'āi yā',
  调集: 'diào jí',
  看中: 'kàn zhòng',
  议长: 'yì zhǎng',
  风筝: 'fēng zheng',
  辟邪: 'bì xié',
  空隙: 'kòng xì',
  更迭: 'gēng dié',
  偏差: 'piān chā',
  声调: 'shēng diào',
  农行: 'nóng háng',
  适量: 'shì liàng',
  屯子: 'tún zi',
  无量: 'wú liàng',
  空地: 'kòng dì',
  调度: 'diào dù',
  一曲: 'yì qǔ',
  散射: 'sǎn shè',
  太行: 'tài háng',
  创伤: 'chuāng shāng',
  海参: 'hǎi shēn',
  满载: 'mǎn zài',
  重叠: 'chóng dié',
  落差: 'luò chā',
  单调: 'dān diào',
  老将: 'lǎo jiàng',
  人参: 'rén shēn',
  间断: 'jiàn duàn',
  重现: 'chóng xiàn',
  夹杂: 'jiā zá',
  调用: 'diào yòng',
  萝卜: 'luó bo',
  附着: 'fù zhuó',
  应声: 'yìng shēng',
  主将: 'zhǔ jiàng',
  罪过: 'zuì guo',
  咀嚼: 'jǔ jué',
  为政: 'wéi zhèng',
  过量: 'guò liàng',
  乐曲: 'yuè qǔ',
  负荷: 'fù hè',
  枪弹: 'qiāng dàn',
  悄然: 'qiǎo rán',
  处方: 'chǔ fāng',
  悄声: 'qiǎo shēng',
  曲子: 'qǔ zi',
  情调: 'qíng diào',
  挑衅: 'tiǎo xìn',
  代为: 'dài wéi',
  了结: 'liǎo jié',
  打中: 'dǎ zhòng',
  酒吧: 'jiǔ bā',
  作曲: 'zuò qǔ',
  懒得: 'lǎn de',
  增量: 'zēng liàng',
  衣着: 'yī zhuó',
  部将: 'bù jiàng',
  要塞: 'yào sài',
  茶几: 'chá jī',
  杠杆: 'gàng gǎn',
  出没: 'chū mò',
  鲜有: 'xiǎn yǒu',
  间隙: 'jiàn xì',
  重担: 'zhòng dàn',
  重演: 'chóng yǎn',
  重试: 'chóng shì',
  应酬: 'yìng chou',
  只当: 'zhǐ dāng',
  毋宁: 'wú nìng',
  包扎: 'bāo zā',
  前头: 'qián tou',
  卷烟: 'juǎn yān',
  非得: 'fēi děi',
  弹道: 'dàn dào',
  杆子: 'gān zi',
  门将: 'mén jiàng',
  后头: 'hòu tou',
  喝彩: 'hè cǎi',
  暖和: 'nuǎn huo',
  累积: 'lěi jī',
  调遣: 'diào qiǎn',
  倔强: 'jué jiàng',
  宝藏: 'bǎo zàng',
  丧事: 'sāng shì',
  约莫: 'yuē mo',
  纤夫: 'qiàn fū',
  更替: 'gēng tì',
  装载: 'zhuāng zài',
  背包: 'bēi bāo',
  帖子: 'tiě zi',
  松散: 'sōng sǎn',
  支行: 'zhī háng',
  呼喝: 'hū hè',
  可恶: 'kě wù',
  自转: 'zì zhuàn',
  供电: 'gōng diàn',
  反省: 'fǎn xǐng',
  坦率: 'tǎn shuài',
  苏打: 'sū dá',
  本分: 'běn fèn',
  落得: 'luò de',
  鄙薄: 'bǐ bó',
  相间: 'xiāng jiàn',
  单薄: 'dān bó',
  混蛋: 'hún dàn',
  贞观: 'zhēn guān',
  附和: 'fù hè',
  能耐: 'néng nài',
  吓唬: 'xià hu',
  未了: 'wèi liǎo',
  引着: 'yǐn zháo',
  抽调: 'chōu diào',
  沙子: 'shā zi',
  席卷: 'xí juǎn',
  标的: 'biāo dì',
  别扭: 'biè niu',
  思量: 'sī liang',
  喝采: 'hè cǎi',
  论语: 'lún yǔ',
  盖子: 'gài zi',
  曲艺: 'qǔ yì',
  分外: 'fèn wài',
  弄堂: 'lòng táng',
  乐舞: 'yuè wǔ',
  雨量: 'yǔ liàng',
  毛发: 'máo fà',
  差遣: 'chāi qiǎn',
  曲目: 'qǔ mù',
  背负: 'bēi fù',
  转速: 'zhuàn sù',
  声乐: 'shēng yuè',
  夹攻: 'jiā gōng',
  供水: 'gōng shuǐ',
  主干: 'zhǔ gàn',
  惩处: 'chéng chǔ',
  长相: 'zhǎng xiàng',
  公差: 'gōng chāi',
  行当: 'háng dang',
  榴弹: 'liú dàn',
  省得: 'shěng de',
  条子: 'tiáo zi',
  重围: 'chóng wéi',
  阻塞: 'zǔ sè',
  劲风: 'jìng fēng',
  纠葛: 'jiū gé',
  颠簸: 'diān bǒ',
  点中: 'diǎn zhòng',
  重创: 'zhòng chuāng',
  姥姥: 'lǎo lao',
  迷糊: 'mí hu',
  公家: 'gōng jia',
  几率: 'jī lǜ',
  苦闷: 'kǔ mèn',
  度量: 'dù liàng',
  差错: 'chā cuò',
  暑假: 'shǔ jià',
  参差: 'cēn cī',
  搭载: 'dā zài',
  助长: 'zhù zhǎng',
  相称: 'xiāng chèn',
  红晕: 'hóng yùn',
  舍命: 'shě mìng',
  喜好: 'xǐ hào',
  列传: 'liè zhuàn',
  劲敌: 'jìng dí',
  蛤蟆: 'há ma',
  请假: 'qǐng jià',
  钉子: 'dīng zi',
  沉没: 'chén mò',
  高丽: 'gāo lí',
  休假: 'xiū jià',
  无为: 'wú wéi',
  巴结: 'bā jie',
  了得: 'liǎo dé',
  变相: 'biàn xiàng',
  核弹: 'hé dàn',
  亲家: 'qìng jia',
  承载: 'chéng zài',
  行家: 'háng jia',
  喝问: 'hè wèn',
  还击: 'huán jī',
  交还: 'jiāo huán',
  将令: 'jiàng lìng',
  单于: 'chán yú',
  空缺: 'kòng quē',
  绿林: 'lù lín',
  胆量: 'dǎn liàng',
  执着: 'zhí zhuó',
  低调: 'dī diào',
  闭塞: 'bì sè',
  轻薄: 'qīng bó',
  得当: 'dé dàng',
  占卜: 'zhān bǔ',
  排行: 'pái háng',
  扫帚: 'sào zhou',
  龟兹: 'qiū cí',
  年长: 'nián zhǎng',
  外传: 'wài zhuàn',
  头子: 'tóu zi',
  裁缝: 'cái feng',
  礼乐: 'lǐ yuè',
  血泊: 'xuè pō',
  散乱: 'sǎn luàn',
  动量: 'dòng liàng',
  倒腾: 'dǎo teng',
  取舍: 'qǔ shě',
  咱家: 'zán jiā',
  长发: 'cháng fà',
  爪哇: 'zhǎo wā',
  弹壳: 'dàn ké',
  省悟: 'xǐng wù',
  嚷嚷: 'rāng rang',
  连累: 'lián lèi',
  应得: 'yīng dé',
  族长: 'zú zhǎng',
  柜子: 'guì zi',
  擂鼓: 'léi gǔ',
  眩晕: 'xuàn yùn',
  调配: 'tiáo pèi',
  躯干: 'qū gàn',
  差役: 'chāi yì',
  坎坷: 'kǎn kě',
  少儿: 'shào ér',
  乐团: 'yuè tuán',
  养分: 'yǎng fèn',
  退还: 'tuì huán',
  格调: 'gé diào',
  语调: 'yǔ diào',
  音调: 'yīn diào',
  乐府: 'yuè fǔ',
  古朴: 'gǔ pǔ',
  打点: 'dǎ diǎn',
  差使: 'chāi shǐ',
  匀称: 'yún chèn',
  瘦削: 'shòu xuē',
  膏药: 'gāo yao',
  吞没: 'tūn mò',
  调任: 'diào rèn',
  散居: 'sǎn jū',
  上头: 'shàng tóu',
  风靡: 'fēng mǐ',
  放假: 'fàng jià',
  估量: 'gū liang',
  失当: 'shī dàng',
  中弹: 'zhòng dàn',
  妄为: 'wàng wéi',
  长者: 'zhǎng zhě',
  起哄: 'qǐ hòng',
  末了: 'mò liǎo',
  相声: 'xiàng sheng',
  校正: 'jiào zhèng',
  劝降: 'quàn xiáng',
  矢量: 'shǐ liàng',
  沉闷: 'chén mèn',
  给与: 'jǐ yǔ',
  解法: 'jiě fǎ',
  塞外: 'sài wài',
  将校: 'jiàng xiào',
  嗜好: 'shì hào',
  没落: 'mò luò',
  朴刀: 'pō dāo',
  片子: 'piān zi',
  切削: 'qiē xiāo',
  弹丸: 'dàn wán',
  昆曲: 'kūn qǔ',
  稀薄: 'xī bó',
  亏得: 'kuī dé',
  间歇: 'jiàn xiē',
  翘首: 'qiáo shǒu',
  色调: 'sè diào',
  处决: 'chǔ jué',
  表率: 'biǎo shuài',
  尺子: 'chǐ zi',
  招降: 'zhāo xiáng',
  称职: 'chèn zhí',
  斗篷: 'dǒu peng',
  铺子: 'pù zi',
  底子: 'dǐ zi',
  负载: 'fù zài',
  干警: 'gàn jǐng',
  倒数: 'dào shǔ',
  将官: 'jiàng guān',
  锄头: 'chú tou',
  归降: 'guī xiáng',
  疟疾: 'nüè ji',
  唠叨: 'láo dao',
  限量: 'xiàn liàng',
  屏息: 'bǐng xī',
  重逢: 'chóng féng',
  器乐: 'qì yuè',
  氢弹: 'qīng dàn',
  脖颈: 'bó gěng',
  妃子: 'fēi zi',
  处事: 'chǔ shì',
  参量: 'cān liàng',
  轻率: 'qīng shuài',
  缥缈: 'piāo miǎo',
  中奖: 'zhòng jiǎng',
  才干: 'cái gàn',
  施舍: 'shī shě',
  卷子: 'juàn zi',
  游说: 'yóu shuì',
  巷子: 'xiàng zi',
  膀胱: 'páng guāng',
  切勿: 'qiè wù',
  看管: 'kān guǎn',
  风头: 'fēng tou',
  精干: 'jīng gàn',
  高差: 'gāo chā',
  恐吓: 'kǒng hè',
  扁担: 'biǎn dàn',
  给养: 'jǐ yǎng',
  格子: 'gé zi',
  供需: 'gōng xū',
  反差: 'fǎn chā',
  飞弹: 'fēi dàn',
  微薄: 'wēi bó',
  发型: 'fà xíng',
  即兴: 'jí xìng',
  攒动: 'cuán dòng',
  间或: 'jiàn huò',
  浅薄: 'qiǎn bó',
  乐章: 'yuè zhāng',
  顺差: 'shùn chā',
  调子: 'diào zi',
  相位: 'xiàng wèi',
  转子: 'zhuàn zǐ',
  劲旅: 'jìng lǚ',
  咔嚓: 'kā chā',
  了事: 'liǎo shì',
  转悠: 'zhuàn you',
  当铺: 'dàng pù',
  爪子: 'zhuǎ zi',
  单子: 'dān zi',
  好战: 'hào zhàn',
  燕麦: 'yàn mài',
  只许: 'zhǐ xǔ',
  干练: 'gàn liàn',
  女将: 'nǚ jiàng',
  酒量: 'jiǔ liàng',
  划船: 'huá chuán',
  伎俩: 'jì liǎng',
  挑拨: 'tiǎo bō',
  少校: 'shào xiào',
  着落: 'zhuó luò',
  憎恶: 'zēng wù',
  刻薄: 'kè bó',
  要挟: 'yāo xié',
  用处: 'yòng chu',
  还手: 'huán shǒu',
  模具: 'mú jù',
  执著: 'zhí zhuó',
  喝令: 'hè lìng',
  保长: 'bǎo zhǎng',
  吸着: 'xī zhe',
  症结: 'zhēng jié',
  公转: 'gōng zhuàn',
  校勘: 'jiào kān',
  重提: 'chóng tí',
  扫兴: 'sǎo xìng',
  舞曲: 'wǔ qǔ',
  铺盖: 'pū gài',
  长史: 'zhǎng shǐ',
  差价: 'chā jià',
  压根: 'yà gēn',
  怔住: 'zhèng zhù',
  应允: 'yīng yǔn',
  切入: 'qiē rù',
  战将: 'zhàn jiàng',
  年少: 'nián shào',
  舍身: 'shě shēn',
  执拗: 'zhí niù',
  处世: 'chǔ shì',
  中风: 'zhòng fēng',
  等量: 'děng liàng',
  放量: 'fàng liàng',
  腔调: 'qiāng diào',
  老少: 'lǎo shào',
  没入: 'mò rù',
  瓜葛: 'guā gé',
  将帅: 'jiàng shuài',
  车载: 'chē zài',
  窝囊: 'wō nang',
  长进: 'zhǎng jìn',
  可汗: 'kè hán',
  并州: 'bīng zhōu',
  供销: 'gōng xiāo',
  切片: 'qiē piàn',
  差事: 'chāi shì',
  知会: 'zhī hui',
  鹰爪: 'yīng zhǎo',
  处女: 'chǔ nǚ',
  切磋: 'qiē cuō',
  日头: 'rì tou',
  押解: 'yā jiè',
  滋长: 'zī zhǎng',
  道观: 'dào guàn',
  脚色: 'jué sè',
  当量: 'dāng liàng',
  婆家: 'pó jia',
  缘分: 'yuán fèn',
  空闲: 'kòng xián',
  曲牌: 'qǔ pái',
  好色: 'hào sè',
  行会: 'háng huì',
  怒喝: 'nù hè',
  笼统: 'lǒng tǒng',
  边塞: 'biān sài',
  何曾: 'hé céng',
  重合: 'chóng hé',
  插曲: 'chā qǔ',
  零散: 'líng sǎn',
  轰隆: 'hōng lōng',
  化子: 'huà zi',
  内蒙: 'nèi měng',
  数落: 'shǔ luò',
  逆差: 'nì chā',
  牟利: 'móu lì',
  栅栏: 'zhà lan',
  中标: 'zhòng biāo',
  调档: 'diào dàng',
  佝偻: 'gōu lóu',
  场子: 'chǎng zi',
  甲壳: 'jiǎ qiào',
  重温: 'chóng wēn',
  炮制: 'páo zhì',
  返还: 'fǎn huán',
  自传: 'zì zhuàn',
  高调: 'gāo diào',
  词曲: 'cí qǔ',
  殷红: 'yān hóng',
  固着: 'gù zhuó',
  强求: 'qiǎng qiú',
  本相: 'běn xiàng',
  骄横: 'jiāo hèng',
  草率: 'cǎo shuài',
  气闷: 'qì mèn',
  着色: 'zhuó sè',
  宁肯: 'nìng kěn',
  兴头: 'xìng tou',
  拘泥: 'jū nì',
  夹角: 'jiā jiǎo',
  发髻: 'fà jì',
  猛将: 'měng jiàng',
  约摸: 'yuē mo',
  拖累: 'tuō lěi',
  呢绒: 'ní róng',
  钻探: 'zuān tàn',
  夹层: 'jiā céng',
  落魄: 'luò pò',
  巷道: 'hàng dào',
  运量: 'yùn liàng',
  解闷: 'jiě mèn',
  空儿: 'kòng er',
  估摸: 'gū mo',
  好客: 'hào kè',
  小曲: 'xiǎo qǔ',
  钻孔: 'zuān kǒng',
  序曲: 'xù qǔ',
  糊弄: 'hù nòng',
  荥阳: 'xíng yáng',
  道行: 'dào héng',
  烦闷: 'fán mèn',
  仓卒: 'cāng cù',
  分叉: 'fēn chà',
  曲率: 'qū lǜ',
  内行: 'nèi háng',
  厂子: 'chǎng zi',
  小调: 'xiǎo diào',
  少阳: 'shào yáng',
  受降: 'shòu xiáng',
  染坊: 'rǎn fáng',
  胳臂: 'gē bei',
  将门: 'jiàng mén',
  模板: 'mú bǎn',
  配给: 'pèi jǐ',
  为伍: 'wéi wǔ',
  跟头: 'gēn tou',
  划算: 'huá suàn',
  累赘: 'léi zhui',
  哄笑: 'hōng xiào',
  晕眩: 'yūn xuàn',
  干掉: 'gàn diào',
  缝制: 'féng zhì',
  难处: 'nán chù',
  着意: 'zhuó yì',
  蛮横: 'mán hèng',
  奇数: 'jī shù',
  短发: 'duǎn fà',
  生还: 'shēng huán',
  还清: 'huán qīng',
  看护: 'kān hù',
  直率: 'zhí shuài',
  奏乐: 'zòu yuè',
  载客: 'zài kè',
  专横: 'zhuān hèng',
  湮没: 'yān mò',
  空格: 'kòng gé',
  铺垫: 'pū diàn',
  良将: 'liáng jiàng',
  哗啦: 'huā lā',
  散漫: 'sǎn màn',
  脱发: 'tuō fà',
  送还: 'sòng huán',
  埋没: 'mái mò',
  累及: 'lěi jí',
  薄雾: 'bó wù',
  调离: 'diào lí',
  舌苔: 'shé tāi',
  机长: 'jī zhǎng',
  栓塞: 'shuān sè',
  配角: 'pèi jué',
  切口: 'qiē kǒu',
  创口: 'chuāng kǒu',
  哈欠: 'hā qian',
  实弹: 'shí dàn',
  铺平: 'pū píng',
  哈达: 'hǎ dá',
  懒散: 'lǎn sǎn',
  实干: 'shí gàn',
  填空: 'tián kòng',
  刁钻: 'diāo zuān',
  乐师: 'yuè shī',
  量变: 'liàng biàn',
  诱降: 'yòu xiáng',
  搪塞: 'táng sè',
  征调: 'zhēng diào',
  夹道: 'jiā dào',
  干咳: 'gān ké',
  止咳: 'zhǐ ké',
  乐工: 'yuè gōng',
  商行: 'shāng háng',
  划过: 'huá guò',
  着火: 'zháo huǒ',
  更正: 'gēng zhèng',
  给付: 'jǐ fù',
  空子: 'kòng zi',
  哪吒: 'né zhā',
  散曲: 'sǎn qǔ',
  行规: 'háng guī',
  正着: 'zhèng zháo',
  刷子: 'shuā zi',
  丧葬: 'sāng zàng',
  夹带: 'jiā dài',
  安分: 'ān fèn',
  中意: 'zhòng yì',
  长孙: 'zhǎng sūn',
  校订: 'jiào dìng',
  卷曲: 'juǎn qū',
  载运: 'zài yùn',
  投弹: 'tóu dàn',
  柞蚕: 'zuò cán',
  份量: 'fèn liàng',
  外行: 'wài háng',
  调换: 'diào huàn',
  了然: 'liǎo rán',
  咧嘴: 'liě zuǐ',
  典当: 'diǎn dàng',
  寒假: 'hán jià',
  长兄: 'zhǎng xiōng',
  给水: 'jǐ shuǐ',
  须发: 'xū fà',
  枝干: 'zhī gàn',
  属相: 'shǔ xiàng',
  哄抢: 'hōng qiǎng',
  刻划: 'kè huà',
  塞子: 'sāi zi',
  单干: 'dān gàn',
  还乡: 'huán xiāng',
  兆头: 'zhào tou',
  寺观: 'sì guàn',
  督率: 'dū shuài',
  啊哈: 'ā ha',
  割舍: 'gē shě',
  抹布: 'mā bù',
  好恶: 'hào wù',
  下处: 'xià chǔ',
  消长: 'xiāo zhǎng',
  离间: 'lí jiàn',
  准头: 'zhǔn tou',
  校对: 'jiào duì',
  什物: 'shí wù',
  番禺: 'pān yú',
  佛爷: 'fó ye',
  吗啡: 'mǎ fēi',
  盐分: 'yán fèn',
  虎将: 'hǔ jiàng',
  薄荷: 'bò he',
  独处: 'dú chǔ',
  空位: 'kòng wèi',
  铺路: 'pū lù',
  乌拉: 'wū lā',
  调回: 'diào huí',
  来头: 'lái tou',
  闲散: 'xián sǎn',
  胶卷: 'jiāo juǎn',
  冒失: 'mào shi',
  干劲: 'gàn jìn',
  弦乐: 'xián yuè',
  行伍: 'háng wǔ',
  相国: 'xiàng guó',
  丹参: 'dān shēn',
  助兴: 'zhù xìng',
  铺开: 'pū kāi',
  次长: 'cì zhǎng',
  发卡: 'fà qiǎ',
  拮据: 'jié jū',
  刹车: 'shā chē',
  生发: 'shēng fà',
  重播: 'chóng bō',
  缝合: 'féng hé',
  音量: 'yīn liàng',
  少尉: 'shào wèi',
  冲压: 'chòng yā',
  苍劲: 'cāng jìng',
  厚薄: 'hòu báo',
  威吓: 'wēi hè',
  外相: 'wài xiàng',
  曲谱: 'qǔ pǔ',
  呼号: 'hū háo',
  着迷: 'zháo mí',
  挑担: 'tiāo dàn',
  纹路: 'wén lù',
  还俗: 'huán sú',
  强横: 'qiáng hèng',
  着数: 'zhāo shù',
  降顺: 'xiáng shùn',
  挑明: 'tiǎo míng',
  眯缝: 'mī feng',
  分内: 'fèn nèi',
  更衣: 'gēng yī',
  软和: 'ruǎn huo',
  尽兴: 'jìn xìng',
  号子: 'hào zi',
  爪牙: 'zhǎo yá',
  败将: 'bài jiàng',
  猜中: 'cāi zhòng',
  结扎: 'jié zā',
  没空: 'méi kòng',
  夹缝: 'jiā fèng',
  拾掇: 'shí duo',
  掺和: 'chān huo',
  簸箕: 'bò ji',
  电量: 'diàn liàng',
  荷载: 'hè zǎi',
  调式: 'diào shì',
  处身: 'chǔ shēn',
  打手: 'dǎ shǒu',
  弹弓: 'dàn gōng',
  横蛮: 'hèng mán',
  能干: 'néng gàn',
  校点: 'jiào diǎn',
  加载: 'jiā zài',
  干校: 'gàn xiào',
  哄传: 'hōng chuán',
  校注: 'jiào zhù',
  淤塞: 'yū sè',
  马扎: 'mǎ zhá',
  月氏: 'yuè zhī',
  高干: 'gāo gàn',
  经传: 'jīng zhuàn',
  曾孙: 'zēng sūn',
  好斗: 'hào dòu',
  关卡: 'guān qiǎ',
  逃奔: 'táo bèn',
  磨蹭: 'mó ceng',
  牟取: 'móu qǔ',
  颤栗: 'zhàn lì',
  蚂蚱: 'mà zha',
  撮合: 'cuō he',
  趔趄: 'liè qie',
  摔打: 'shuāi dǎ',
  台子: 'tái zi',
  分得: 'fēn de',
  粘着: 'nián zhuó',
  采邑: 'cài yì',
  散装: 'sǎn zhuāng',
  婀娜: 'ē nuó',
  兴味: 'xìng wèi',
  行头: 'xíng tou',
  气量: 'qì liàng',
  调运: 'diào yùn',
  处治: 'chǔ zhì',
  乐音: 'yuè yīn',
  组曲: 'zǔ qǔ',
  充塞: 'chōng sè',
  恫吓: 'dòng hè',
  论调: 'lùn diào',
  相中: 'xiāng zhòng',
  民乐: 'mín yuè',
  炮仗: 'pào zhang',
  丧服: 'sāng fú',
  骁将: 'xiāo jiàng',
  量刑: 'liàng xíng',
  缝补: 'féng bǔ',
  财会: 'cái kuài',
  大干: 'dà gàn',
  历数: 'lì shǔ',
  校场: 'jiào chǎng',
  塞北: 'sài běi',
  识相: 'shí xiàng',
  辱没: 'rǔ mò',
  鲜亮: 'xiān liàng',
  语塞: 'yǔ sè',
  露脸: 'lòu liǎn',
  凉快: 'liáng kuai',
  腰杆: 'yāo gǎn',
  溜达: 'liū da',
  嘎嘎: 'gā gā',
  公干: 'gōng gàn',
  桔梗: 'jié gěng',
  挑逗: 'tiǎo dòu',
  看门: 'kān mén',
  乐歌: 'yuè gē',
  拓片: 'tà piàn',
  挑动: 'tiǎo dòng',
  准将: 'zhǔn jiàng',
  遒劲: 'qiú jìng',
  磨坊: 'mò fáng',
  逶迤: 'wēi yí',
  搅和: 'jiǎo huo',
  摩挲: 'mó suō',
  作弄: 'zuò nòng',
  苗头: 'miáo tou',
  打颤: 'dǎ zhàn',
  大藏: 'dà zàng',
  畜牲: 'chù shēng',
  勾搭: 'gōu da',
  树荫: 'shù yīn',
  树杈: 'shù chà',
  铁杆: 'tiě gǎn',
  将相: 'jiàng xiàng',
  份子: 'fèn zi',
  视差: 'shì chā',
  绿荫: 'lǜ yīn',
  枪杆: 'qiāng gǎn',
  缝纫: 'féng rèn',
  愁闷: 'chóu mèn',
  点将: 'diǎn jiàng',
  华佗: 'huà tuó',
  劲射: 'jìng shè',
  箱笼: 'xiāng lǒng',
  终了: 'zhōng liǎo',
  鬓发: 'bìn fà',
  结巴: 'jiē ba',
  苦干: 'kǔ gàn',
  看家: 'kān jiā',
  正旦: 'zhēng dàn',
  中肯: 'zhòng kěn',
  厦门: 'xià mén',
  东莞: 'dōng guǎn',
  食量: 'shí liàng',
  宫调: 'gōng diào',
  间作: 'jiàn zuò',
  弹片: 'dàn piàn',
  差池: 'chā chí',
  漂白: 'piǎo bái',
  杠子: 'gàng zi',
  调处: 'tiáo chǔ',
  好动: 'hào dòng',
  转炉: 'zhuàn lú',
  屏气: 'bǐng qì',
  夹板: 'jiā bǎn',
  哀乐: 'āi yuè',
  干道: 'gàn dào',
  苦处: 'kǔ chù',
  劈柴: 'pǐ chái',
  长势: 'zhǎng shì',
  天华: 'tiān huá',
  共处: 'gòng chǔ',
  校验: 'jiào yàn',
  出塞: 'chū sài',
  磨盘: 'mò pán',
  萎靡: 'wěi mǐ',
  奔丧: 'bēn sāng',
  唱和: 'chàng hè',
  大调: 'dà diào',
  非分: 'fēi fèn',
  钻营: 'zuān yíng',
  夹子: 'jiā zi',
  超载: 'chāo zài',
  更始: 'gēng shǐ',
  铃铛: 'líng dang',
  披散: 'pī sàn',
  发还: 'fā huán',
  转轮: 'zhuàn lún',
  横财: 'hèng cái',
  泡桐: 'pāo tóng',
  抛撒: 'pāo sǎ',
  天呀: 'tiān yā',
  糊糊: 'hū hu',
  躯壳: 'qū qiào',
  通量: 'tōng liàng',
  奉还: 'fèng huán',
  午觉: 'wǔ jiào',
  闷棍: 'mèn gùn',
  浪头: 'làng tou',
  砚台: 'yàn tái',
  油坊: 'yóu fáng',
  学长: 'xué zhǎng',
  过载: 'guò zài',
  笔调: 'bǐ diào',
  衣被: 'yī bèi',
  畜产: 'xù chǎn',
  调阅: 'diào yuè',
  蛮干: 'mán gàn',
  曾祖: 'zēng zǔ',
  本行: 'běn háng',
  提干: 'tí gàn',
  变调: 'biàn diào',
  覆没: 'fù mò',
  模子: 'mú zi',
  乐律: 'yuè lǜ',
  称心: 'chèn xīn',
  木杆: 'mù gān',
  套曲: 'tào qǔ',
  重印: 'chóng yìn',
  自省: 'zì xǐng',
  提调: 'tí diào',
  看相: 'kàn xiàng',
  芋头: 'yù tou',
  下切: 'xià qiē',
  塞上: 'sài shàng',
  铺张: 'pū zhāng',
  藤蔓: 'téng wàn',
  薄幸: 'bó xìng',
  解数: 'xiè shù',
  褪去: 'tuì qù',
  霰弹: 'xiàn dàn',
  柚木: 'yóu mù',
  痕量: 'hén liàng',
  雅乐: 'yǎ yuè',
  号哭: 'háo kū',
  诈降: 'zhà xiáng',
  猪圈: 'zhū juàn',
  咋舌: 'zé shé',
  铣床: 'xǐ chuáng',
  防弹: 'fáng dàn',
  健将: 'jiàn jiàng',
  丽水: 'lí shuǐ',
  削发: 'xuē fà',
  空当: 'kòng dāng',
  多相: 'duō xiàng',
  鲜见: 'xiǎn jiàn',
  划桨: 'huá jiǎng',
  载波: 'zài bō',
  跳蚤: 'tiào zao',
  俏皮: 'qiào pí',
  吧嗒: 'bā dā',
  结发: 'jié fà',
  了断: 'liǎo duàn',
  同调: 'tóng diào',
  石磨: 'shí mò',
  时差: 'shí chā',
  鼻塞: 'bí sè',
  挑子: 'tiāo zi',
  推磨: 'tuī mò',
  武侯: 'wǔ hóu',
  抹煞: 'mǒ shā',
  调转: 'diào zhuǎn',
  籍没: 'jí mò',
  还债: 'huán zhài',
  调演: 'diào yǎn',
  分划: 'fēn huá',
  奇偶: 'jī ǒu',
  断喝: 'duàn hè',
  闷雷: 'mèn léi',
  狼藉: 'láng jí',
  饭量: 'fàn liàng',
  还礼: 'huán lǐ',
  转调: 'zhuǎn diào',
  星相: 'xīng xiàng',
  手相: 'shǒu xiàng',
  配乐: 'pèi yuè',
  盖头: 'gài tou',
  连杆: 'lián gǎn',
  簿记: 'bù jì',
  刀把: 'dāo bà',
  量词: 'liàng cí',
  名角: 'míng jué',
  步调: 'bù diào',
  校本: 'jiào běn',
  曲江: 'qǔ jiāng',
  账簿: 'zhàng bù',
  隽永: 'juàn yǒng',
  稍为: 'shāo wéi',
  易传: 'yì zhuàn',
  乐谱: 'yuè pǔ',
  牵累: 'qiān lěi',
  答理: 'dā li',
  喝斥: 'hè chì',
  吟哦: 'yín é',
  干渠: 'gàn qú',
  海量: 'hǎi liàng',
  精当: 'jīng dàng',
  着床: 'zhuó chuáng',
  月相: 'yuè xiàng',
  庶几: 'shù jī',
  宫观: 'gōng guàn',
  论处: 'lùn chǔ',
  征辟: 'zhēng bì',
  厚朴: 'hòu pò',
  介壳: 'jiè qiào',
  吭哧: 'kēng chī',
  咯血: 'kǎ xiě',
  铺陈: 'pū chén',
  重生: 'chóng shēng',
  乐理: 'yuè lǐ',
  哀号: 'āi háo',
  藏历: 'zàng lì',
  琴曲: 'qín qǔ',
  神曲: 'shén qǔ',
  刚劲: 'gāng jìng',
  削平: 'xuē píng',
  浓荫: 'nóng yīn',
  城垛: 'chéng duǒ',
  当差: 'dāng chāi',
  正传: 'zhèng zhuàn',
  并处: 'bìng chǔ',
  创面: 'chuāng miàn',
  旦角: 'dàn jué',
  薄礼: 'bó lǐ',
  晃荡: 'huàng dang',
  臊子: 'sào zi',
  家什: 'jiā shí',
  闷头: 'mēn tóu',
  美发: 'měi fà',
  度数: 'dù shu',
  着凉: 'zháo liáng',
  闯将: 'chuǎng jiàng',
  几案: 'jī àn',
  姘头: 'pīn tou',
  差数: 'chā shù',
  散碎: 'sǎn suì',
  壅塞: 'yōng sè',
  寒颤: 'hán zhàn',
  牵强: 'qiān qiǎng',
  无间: 'wú jiàn',
  轮转: 'lún zhuàn',
  号叫: 'háo jiào',
  铺排: 'pū pái',
  降伏: 'xiáng fú',
  轧钢: 'zhá gāng',
  东阿: 'dōng ē',
  病假: 'bìng jià',
  累加: 'lěi jiā',
  梗塞: 'gěng sè',
  弹夹: 'dàn jiā',
  钻心: 'zuān xīn',
  晃眼: 'huǎng yǎn',
  魔爪: 'mó zhǎo',
  标量: 'biāo liàng',
  憋闷: 'biē mèn',
  猜度: 'cāi duó',
  处士: 'chǔ shì',
  官差: 'guān chāi',
  讨还: 'tǎo huán',
  长门: 'cháng mén',
  馏分: 'liú fēn',
  里弄: 'lǐ lòng',
  色相: 'sè xiàng',
  雅兴: 'yǎ xìng',
  角力: 'jué lì',
  弹坑: 'dàn kēng',
  枝杈: 'zhī chà',
  夹具: 'jiā jù',
  处刑: 'chǔ xíng',
  悍将: 'hàn jiàng',
  好学: 'hào xué',
  好好: 'hǎo hǎo',
  银发: 'yín fà',
  扫把: 'sào bǎ',
  法相: 'fǎ xiàng',
  贵干: 'guì gàn',
  供气: 'gōng qì',
  空余: 'kòng yú',
  捆扎: 'kǔn zā',
  瘠薄: 'jí bó',
  浆糊: 'jiàng hu',
  嘎吱: 'gā zhī',
  调令: 'diào lìng',
  法帖: 'fǎ tiè',
  淋病: 'lìn bìng',
  调派: 'diào pài',
  转盘: 'zhuàn pán',
  供稿: 'gōng gǎo',
  差官: 'chāi guān',
  忧闷: 'yōu mèn',
  教长: 'jiào zhǎng',
  重唱: 'chóng chàng',
  酒兴: 'jiǔ xìng',
  乐坛: 'yuè tán',
  花呢: 'huā ní',
  叱喝: 'chì hè',
  膀臂: 'bǎng bì',
  得空: 'dé kòng',
  转圈: 'zhuàn quān',
  横暴: 'hèng bào',
  哄抬: 'hōng tái',
  引吭: 'yǐn háng',
  载货: 'zài huò',
  中计: 'zhòng jì',
  官长: 'guān zhǎng',
  相面: 'xiàng miàn',
  看头: 'kàn tou',
  盼头: 'pàn tou',
  意兴: 'yì xìng',
  军乐: 'jūn yuè',
  累次: 'lěi cì',
  骨嘟: 'gǔ dū',
  燕赵: 'yān zhào',
  报丧: 'bào sāng',
  弥撒: 'mí sa',
  挨斗: 'ái dòu',
  扁舟: 'piān zhōu',
  丑角: 'chǒu jué',
  吊丧: 'diào sāng',
  强将: 'qiáng jiàng',
  行号: 'háng hào',
  重奏: 'chóng zòu',
  发辫: 'fà biàn',
  着魔: 'zháo mó',
  着法: 'zhāo fǎ',
  盛放: 'shèng fàng',
  填塞: 'tián sè',
  凶横: 'xiōng hèng',
  稽首: 'qǐ shǒu',
  碑帖: 'bēi tiè',
  冲量: 'chōng liàng',
  发菜: 'fà cài',
  假发: 'jiǎ fà',
  翻卷: 'fān juǎn',
  小量: 'xiǎo liàng',
  胶着: 'jiāo zhuó',
  里子: 'lǐ zi',
  调调: 'diào diao',
  散兵: 'sǎn bīng',
  高挑: 'gāo tiǎo',
  播撒: 'bō sǎ',
  夹心: 'jiā xīn',
  扇动: 'shān dòng',
  叨扰: 'tāo rǎo',
  霓裳: 'ní cháng',
  捻子: 'niǎn zi',
  弥缝: 'mí féng',
  撒布: 'sǎ bù',
  元曲: 'yuán qǔ',
  场院: 'cháng yuàn',
  省亲: 'xǐng qīn',
  提拉: 'tí lā',
  惯量: 'guàn liàng',
  强逼: 'qiáng bī',
  强征: 'qiáng zhēng',
  晕车: 'yùn chē',
  数道: 'shù dào',
  带累: 'dài lèi',
  拓本: 'tà běn',
  嫌恶: 'xián wù',
  宿将: 'sù jiàng',
  龟裂: 'jūn liè',
  缠夹: 'chán jiā',
  发式: 'fà shì',
  隔扇: 'gé shàn',
  行货: 'háng huò',
  天分: 'tiān fèn',
  癖好: 'pǐ hào',
  四通: 'sì tōng',
  白术: 'bái zhú',
  划伤: 'huá shāng',
  角斗: 'jué dòu',
  听差: 'tīng chāi',
  岁差: 'suì chā',
  丧礼: 'sāng lǐ',
  脉脉: 'mò mò',
  削瘦: 'xuē shòu',
  撒播: 'sǎ bō',
  莎草: 'suō cǎo',
  犍为: 'qián wéi',
  调头: 'diào tóu',
  龙卷: 'lóng juǎn',
  外调: 'wài diào',
  字帖: 'zì tiè',
  卷发: 'juǎn fà',
  揣度: 'chuǎi duó',
  洋相: 'yáng xiàng',
  散光: 'sǎn guāng',
  骨碌: 'gū lu',
  薄命: 'bó mìng',
  笼头: 'lóng tóu',
  咽炎: 'yān yán',
  碌碡: 'liù zhou',
  片儿: 'piàn er',
  纤手: 'qiàn shǒu',
  散体: 'sǎn tǐ',
  内省: 'nèi xǐng',
  强留: 'qiáng liú',
  解送: 'jiè sòng',
  反间: 'fǎn jiàn',
  少壮: 'shào zhuàng',
  留空: 'liú kōng',
  告假: 'gào jià',
  咳血: 'ké xuè',
  薄暮: 'bó mù',
  铺轨: 'pū guǐ',
  磨削: 'mó xuē',
  治丧: 'zhì sāng',
  叉子: 'chā zi',
  哄动: 'hōng dòng',
  蛾子: 'é zi',
  出落: 'chū luò',
  股长: 'gǔ zhǎng',
  贵处: 'guì chù',
  还魂: 'huán hún',
  例假: 'lì jià',
  曲池: 'qǔ chí',
  刹住: 'shā zhù',
  身量: 'shēn liàng',
  懂行: 'dǒng háng',
  同好: 'tóng hào',
  模量: 'mó liàng',
  更生: 'gēng shēng',
  服丧: 'fú sāng',
  率直: 'shuài zhí',
  字模: 'zì mú',
  散架: 'sǎn jià',
  答腔: 'dā qiāng',
  交恶: 'jiāo wù',
  薄情: 'bó qíng',
  眼泡: 'yǎn pāo',
  袅娜: 'niǎo nuó',
  草垛: 'cǎo duò',
  冲劲: 'chòng jìn',
  呢喃: 'ní nán',
  切中: 'qiè zhòng',
  挑灯: 'tiǎo dēng',
  还愿: 'huán yuàn',
  激将: 'jī jiàng',
  更鼓: 'gēng gǔ',
  没药: 'mò yào',
  败兴: 'bài xìng',
  切面: 'qiē miàn',
  散户: 'sǎn hù',
  累进: 'lěi jìn',
  背带: 'bēi dài',
  秤杆: 'chèng gǎn',
  碾坊: 'niǎn fáng',
  簿子: 'bù zi',
  扳手: 'bān shǒu',
  铅山: 'yán shān',
  儒将: 'rú jiàng',
  重光: 'chóng guāng',
  剪发: 'jiǎn fà',
  行话: 'háng huà',
  长上: 'zhǎng shàng',
  小传: 'xiǎo zhuàn',
  压轴: 'yā zhòu',
  谱曲: 'pǔ qǔ',
  弱冠: 'ruò guàn',
  花卷: 'huā juǎn',
  横祸: 'hèng huò',
  夹克: 'jiā kè',
  光晕: 'guāng yùn',
  披靡: 'pī mǐ',
  对调: 'duì diào',
  夹持: 'jiā chí',
  空额: 'kòng é',
  平调: 'píng diào',
  铺床: 'pū chuáng',
  丧钟: 'sāng zhōng',
  作乐: 'zuò lè',
  少府: 'shào fǔ',
  数数: 'shuò shuò',
  奔头: 'bèn tou',
  进给: 'jìn jǐ',
  率性: 'shuài xìng',
  乐子: 'lè zi',
  绑扎: 'bǎng zā',
  挑唆: 'tiǎo suō',
  漂洗: 'piǎo xǐ',
  夹墙: 'jiā qiáng',
  咳喘: 'ké chuǎn',
  乜斜: 'miē xie',
  错处: 'cuò chù',
  闷酒: 'mèn jiǔ',
  时调: 'shí diào',
  重孙: 'chóng sūn',
  经幢: 'jīng chuáng',
  圩场: 'xū chǎng',
  调门: 'diào mén',
  花头: 'huā tóu',
  划拉: 'huá la',
  套色: 'tào shǎi',
  粗率: 'cū shuài',
  相率: 'xiāng shuài',
  款识: 'kuǎn zhì',
  吁请: 'yù qǐng',
  荫蔽: 'yīn bì',
  文蛤: 'wén gé',
  嘀嗒: 'dī dā',
  调取: 'diào qǔ',
  交差: 'jiāo chāi',
  落子: 'luò zǐ',
  相册: 'xiàng cè',
  絮叨: 'xù dao',
  落发: 'luò fà',
  异相: 'yì xiàng',
  浸没: 'jìn mò',
  角抵: 'jué dǐ',
  卸载: 'xiè zài',
  春卷: 'chūn juǎn',
  扎挣: 'zhá zheng',
  畜养: 'xù yǎng',
  吡咯: 'bǐ luò',
  垛子: 'duò zi',
  恶少: 'è shào',
  发际: 'fà jì',
  红苕: 'hóng sháo',
  糨糊: 'jiàng hu',
  哭丧: 'kū sāng',
  稍息: 'shào xī',
  晕船: 'yùn chuán',
  校样: 'jiào yàng',
  外差: 'wài chā',
  红曲: 'hóng qǔ',
  脚爪: 'jiǎo zhǎo',
  铺展: 'pū zhǎn',
  芫荽: 'yán sui',
  夹紧: 'jiā jǐn',
  尿泡: 'suī pào',
  丧乱: 'sāng luàn',
  凶相: 'xiōng xiàng',
  华发: 'huá fà',
  打场: 'dǎ cháng',
  云量: 'yún liàng',
  正切: 'zhèng qiē',
  划拳: 'huá quán',
  划艇: 'huá tǐng',
  评传: 'píng zhuàn',
  拉纤: 'lā qiàn',
  句读: 'jù dòu',
  散剂: 'sǎn jì',
  骨殖: 'gǔ shi',
  塞音: 'sè yīn',
  铺叙: 'pū xù',
  阏氏: 'yān zhī',
  冷颤: 'lěng zhàn',
  煞住: 'shā zhù',
  夜曲: 'yè qǔ',
  少男: 'shào nán',
  管乐: 'guǎn yuè',
  号啕: 'háo táo',
  纳降: 'nà xiáng',
  拥塞: 'yōng sè',
  万乘: 'wàn shèng',
  杆儿: 'gǎn ér',
  葛藤: 'gé téng',
  簿籍: 'bù jí',
  皮夹: 'pí jiā',
  校准: 'jiào zhǔn',
  行款: 'háng kuǎn',
  允当: 'yǔn dàng',
  器量: 'qì liàng',
  选调: 'xuǎn diào',
  扮相: 'bàn xiàng',
  干才: 'gàn cái',
  基干: 'jī gàn',
  割切: 'gē qiē',
  国乐: 'guó yuè',
  卡壳: 'qiǎ ké',
  辟谷: 'bì gǔ',
  磨房: 'mò fáng',
  咿呀: 'yī yā',
  芥末: 'jiè mo',
  薄技: 'bó jì',
  产假: 'chǎn jià',
  诗兴: 'shī xìng',
  重出: 'chóng chū',
  转椅: 'zhuàn yǐ',
  酌量: 'zhuó liang',
  簿册: 'bù cè',
  藏青: 'zàng qīng',
  的士: 'dī shì',
  调人: 'diào rén',
  解元: 'jiè yuán',
  茎干: 'jīng gàn',
  巨量: 'jù liàng',
  榔头: 'láng tou',
  率真: 'shuài zhēn',
  喷香: 'pèn xiāng',
  锁钥: 'suǒ yuè',
  虾蟆: 'há má',
  相图: 'xiàng tú',
  兴会: 'xìng huì',
  灶头: 'zào tóu',
  重婚: 'chóng hūn',
  钻洞: 'zuān dòng',
  忖度: 'cǔn duó',
  党参: 'dǎng shēn',
  调温: 'diào wēn',
  杆塔: 'gān tǎ',
  葛布: 'gé bù',
  拱券: 'gǒng xuàn',
  夹生: 'jiā shēng',
  露馅: 'lòu xiàn',
  恰切: 'qià qiè',
  散见: 'sǎn jiàn',
  哨卡: 'shào qiǎ',
  烫发: 'tàng fà',
  体量: 'tǐ liàng',
  挺括: 'tǐng guā',
  系带: 'jì dài',
  相士: 'xiàng shì',
  羊圈: 'yáng juàn',
  转矩: 'zhuàn jǔ',
  吧台: 'bā tái',
  苍术: 'cāng zhú',
  菲薄: 'fěi bó',
  蛤蚧: 'gé jiè',
  蛤蜊: 'gé lí',
  瓜蔓: 'guā wàn',
  怪相: 'guài xiàng',
  临帖: 'lín tiè',
  女红: 'nǚ gōng',
  刨床: 'bào chuáng',
  翘楚: 'qiáo chǔ',
  数九: 'shǔ jiǔ',
  谈兴: 'tán xìng',
  心曲: 'xīn qǔ',
  雄劲: 'xióng jìng',
  扎染: 'zā rǎn',
  遮荫: 'zhē yīn',
  周正: 'zhōu zhèng',
  赚头: 'zhuàn tou',
  扒手: 'pá shǒu',
  搀和: 'chān huo',
  诚朴: 'chéng pǔ',
  肚量: 'dù liàng',
  干结: 'gān jié',
  工尺: 'gōng chě',
  家累: 'jiā lěi',
  曲水: 'qū shuǐ',
  沙参: 'shā shēn',
  挑花: 'tiǎo huā',
  行距: 'háng jù',
  阿门: 'ā mén',
  背篓: 'bēi lǒu',
  瘪三: 'biē sān',
  裁处: 'cái chǔ',
  创痛: 'chuāng tòng',
  福相: 'fú xiàng',
  更动: 'gēng dòng',
  豪兴: 'háo xìng',
  还阳: 'huán yáng',
  还嘴: 'huán zuǐ',
  借调: 'jiè diào',
  卷云: 'juǎn yún',
  流弹: 'liú dàn',
  想头: 'xiǎng tou',
  削价: 'xuē jià',
  校阅: 'jiào yuè',
  雅量: 'yǎ liàng',
  别传: 'bié zhuàn',
  薄酒: 'bó jiǔ',
  春假: 'chūn jià',
  发妻: 'fà qī',
  哗哗: 'huā huā',
  宽绰: 'kuān chuo',
  了悟: 'liǎo wù',
  切花: 'qiē huā',
  审度: 'shěn duó',
  应许: 'yīng xǔ',
  转台: 'zhuàn tái',
  仔猪: 'zǐ zhū',
  裁量: 'cái liáng',
  藏戏: 'zàng xì',
  乘兴: 'chéng xìng',
  绸缪: 'chóu móu',
  摧折: 'cuī zhé',
  调经: 'tiáo jīng',
  调职: 'diào zhí',
  缝缀: 'féng zhuì',
  骨朵: 'gū duǒ',
  核儿: 'hú er',
  恒量: 'héng liàng',
  还价: 'huán jià',
  浑朴: 'hún pǔ',
  苦差: 'kǔ chāi',
  面糊: 'miàn hù',
  曲张: 'qǔ zhāng',
  煞车: 'shā chē',
  省视: 'xǐng shì',
  什锦: 'shí jǐn',
  信差: 'xìn chāi',
  余切: 'yú qiē',
  攒眉: 'cuán méi',
  炸糕: 'zhá gāo',
  钻杆: 'zuàn gǎn',
  扒灰: 'pá huī',
  拌和: 'bàn huò',
  长调: 'cháng diào',
  大溜: 'dà liù',
  抖搂: 'dǒu lōu',
  飞转: 'fēi zhuàn',
  干仗: 'gàn zhàng',
  好胜: 'hào shèng',
  画片: 'huà piàn',
  搅混: 'jiǎo hún',
  螺杆: 'luó gǎn',
  木模: 'mù mú',
  怒号: 'nù háo',
  频数: 'pín shù',
  无宁: 'wú níng',
  选曲: 'xuǎn qǔ',
  遗少: 'yí shào',
  邮差: 'yóu chāi',
  占卦: 'zhān guà',
  占星: 'zhān xīng',
  重审: 'chóng shěn',
  自量: 'zì liàng',
  调防: 'diào fáng',
  发廊: 'fà láng',
  反调: 'fǎn diào',
  缝子: 'fèng zi',
  更夫: 'gēng fū',
  骨子: 'gǔ zi',
  光杆: 'guāng gǎn',
  夹棍: 'jiā gùn',
  居丧: 'jū sāng',
  巨贾: 'jù gǔ',
  看押: 'kān yā',
  空转: 'kōng zhuàn',
  量力: 'liàng lì',
  炮烙: 'páo luò',
  赔还: 'péi huán',
  扑扇: 'pū shān',
  散记: 'sǎn jì',
  散件: 'sǎn jiàn',
  删削: 'shān xuē',
  射干: 'shè gàn',
  条几: 'tiáo jī',
  偷空: 'tōu kòng',
  削壁: 'xuē bì',
  校核: 'jiào hé',
  阴干: 'yīn gān',
  择菜: 'zhái cài',
  重九: 'chóng jiǔ',
  主调: 'zhǔ diào',
  自禁: 'zì jīn',
  吧唧: 'bā jī',
  便溺: 'biàn niào',
  词调: 'cí diào',
  叨咕: 'dáo gu',
  俚曲: 'lǐ qǔ',
  落枕: 'lào zhěn',
  铺砌: 'pū qì',
  刷白: 'shuà bái',
  委靡: 'wěi mǐ',
  系泊: 'xì bó',
  相马: 'xiàng mǎ',
  行辈: 'háng bèi',
  熨帖: 'yù tiē',
  转筋: 'zhuàn jīn',
  棒喝: 'bàng hè',
  傧相: 'bīn xiàng',
  镐头: 'gǎo tóu',
  间苗: 'jiàn miáo',
  乐池: 'yuè chí',
  卖相: 'mài xiàng',
  屏弃: 'bǐng qì',
  铅弹: 'qiān dàn',
  切变: 'qiē biàn',
  请调: 'qǐng diào',
  曲度: 'qǔ dù',
  群氓: 'qún méng',
  散板: 'sǎn bǎn',
  省察: 'xǐng chá',
  事假: 'shì jià',
  纤绳: 'qiàn shéng',
  重影: 'chóng yǐng',
  耕种: 'gēng zhòng',
  种地: 'zhòng dì',
  种菜: 'zhòng cài',
  栽种: 'zāi zhòng',
  接种: 'jiē zhòng',
  垦种: 'kěn zhòng',
  种殖: 'zhòng zhí',
  种瓜: 'zhòng guā',
  种豆: 'zhòng dòu',
  种树: 'zhòng shù',
  睡着: 'shuì zháo',
  笼子: 'lóng zi',
  重启: 'chóng qǐ',
  重整: 'chóng zhěng',
  重弹: 'chóng tán',
  重足: 'chóng zú',
  重山: 'chóng shān',
  重游: 'chóng yóu',
  重峦: 'chóng luán',
  爷爷: 'yé ye',
  奶奶: 'nǎi nai',
  姥爷: 'lǎo ye',
  爸爸: 'bà ba',
  妈妈: 'mā ma',
  婶婶: 'shěn shen',
  舅舅: 'jiù jiu',
  姑姑: 'gū gu',
  叔叔: 'shū shu',
  姨夫: 'yí fu',
  舅母: 'jiù mu',
  姑父: 'gū fu',
  姐夫: 'jiě fu',
  婆婆: 'pó po',
  公公: 'gōng gong',
  舅子: 'jiù zi',
  姐姐: 'jiě jie',
  哥哥: 'gē ge',
  妹妹: 'mèi mei',
  妹夫: 'mèi fu',
  姨子: 'yí zi',
  宝宝: 'bǎo bao',
  娃娃: 'wá wa',
  孩子: 'hái zi',
  日子: 'rì zi',
  样子: 'yàng zi',
  狮子: 'shī zi',
  身子: 'shēn zi',
  架子: 'jià zi',
  嫂子: 'sǎo zi',
  鼻子: 'bí zi',
  亭子: 'tíng zi',
  折子: 'zhé zi',
  面子: 'miàn zi',
  脖子: 'bó zi',
  辈子: 'bèi zi',
  帽子: 'mào zi',
  拍子: 'pāi zi',
  柱子: 'zhù zi',
  辫子: 'biàn zi',
  鸽子: 'gē zi',
  房子: 'fáng zi',
  丸子: 'wán zi',
  摊子: 'tān zi',
  牌子: 'pái zi',
  胡子: 'hú zi',
  鬼子: 'guǐ zi',
  矮子: 'ǎi zi',
  鸭子: 'yā zi',
  小子: 'xiǎo zi',
  影子: 'yǐng zi',
  屋子: 'wū zi',
  对子: 'duì zi',
  点子: 'diǎn zi',
  本子: 'běn zi',
  种子: 'zhǒng zi',
  儿子: 'ér zi',
  兔子: 'tù zi',
  骗子: 'piàn zi',
  院子: 'yuàn zi',
  猴子: 'hóu zi',
  嗓子: 'sǎng zi',
  侄子: 'zhí zi',
  柿子: 'shì zi',
  钳子: 'qián zi',
  虱子: 'shī zi',
  瓶子: 'píng zi',
  豹子: 'bào zi',
  筷子: 'kuài zi',
  篮子: 'lán zi',
  绳子: 'shéng zi',
  嘴巴: 'zuǐ ba',
  耳朵: 'ěr duo',
  茄子: 'qié zi',
  蚌埠: 'bèng bù',
  崆峒: 'kōng tóng',
  琵琶: 'pí pa',
  蘑菇: 'mó gu',
  葫芦: 'hú lu',
  狐狸: 'hú li',
  桔子: 'jú zi',
  盒子: 'hé zi',
  桌子: 'zhuō zi',
  竹子: 'zhú zi',
  师傅: 'shī fu',
  衣服: 'yī fu',
  袜子: 'wà zi',
  杯子: 'bēi zi',
  刺猬: 'cì wei',
  麦子: 'mài zi',
  队伍: 'duì wu',
  知了: 'zhī liǎo',
  鱼儿: 'yú er',
  馄饨: 'hún tun',
  灯笼: 'dēng long',
  庄稼: 'zhuāng jia',
  聪明: 'cōng ming',
  镜子: 'jìng zi',
  银子: 'yín zi',
  盘子: 'pán zi',
  了却: 'liǎo què',
  力气: 'lì qi',
  席子: 'xí zi',
  林子: 'lín zi',
  朝霞: 'zhāo xiá',
  朝夕: 'zhāo xī',
  朝气: 'zhāo qì',
  翅膀: 'chì bǎng',
  省长: 'shěng zhǎng',
  臧否: 'zāng pǐ',
  否泰: 'pǐ tài',
  变得: 'biàn de',
  丈夫: 'zhàng fu',
  豆腐: 'dòu fu',
  笔杆: 'bǐ gǎn',
  枞阳: 'zōng yáng',
  行人: 'xíng rén',
  打着: 'dǎ zhe',
  第一: 'dì yī',
  万一: 'wàn yī',
  之一: 'zhī yī',
  得之: 'dé zhī', // 避免「之一」与「得之一寸光中」的「一寸」冲突
  统一: 'tǒng yī',
  如一: 'rú yī',
  初一: 'chū yī',
  一月: 'yī yuè',
  高一: 'gāo yī',
  了了: 'liǎo liǎo',
  公了: 'gōng liǎo',
  私了: 'sī liǎo',
  // 一字始终为一声的词
  一号: 'yī hào',
  月一: 'yuè yī',
  一一: 'yī yī',
  二一: 'èr yī', // 如：二一添作五
  三一: 'sān yī',
  四一: 'sì yī',
  五一: 'wǔ yī',
  六一: 'liù yī', // 如：六一儿童节
  七一: 'qī yī',
  八一: 'bā yī', // 如：八一建军节
  九一: 'jiǔ yī',
  一零: 'yī líng', // 如：二零零一、二百零一行
  一二: 'yī èr', // 如：乘法口诀表，一二得二
  一三: 'yī sān',
  一四: 'yī sì',
  一五: 'yī wǔ', // 如：一五一十
  一六: 'yī liù',
  一七: 'yī qī',
  一八: 'yī bā',
  一九: 'yī jiǔ', // 如：一九天很冷
  一又: 'yī yòu', // 如小数：一又二分之一
  归一: 'guī yī', // 如：归一化、九九归一
  一更: 'yī gēng',
  // TODO:  添加更多为(二声)的词
  为例: 'wéi lì',
  为准: 'wéi zhǔn',
  沧海: 'cāng hǎi', // 加这个词是为了避免匹配成「曾经沧/海难/为水」为变成第四声
  难为: 'nán wéi',
  责难: 'zé nàn',
  患难: 'huàn nàn',
  磨难: 'mó nàn',
  大难: 'dà nàn',
  刁难: 'diāo nàn',
  殉难: 'xùn nàn',
  落难: 'luò nàn',
  罹难: 'lí nàn',
  灾难: 'zāi nàn',
  难民: 'nàn mín',
  苦难: 'kǔ nàn',
  危难: 'wēi nàn',
  发难: 'fā nàn',
  逃难: 'táo nàn',
  避难: 'bì nàn',
  遇难: 'yù nàn',
  阻难: 'zǔ nàn',
  厄难: 'è nàn',
  徇难: 'xùn nàn',
  空难: 'kōng nàn',
};
export default DICT2;
export const Pattern2: Pattern[] = Object.keys(DICT2).map((key) => ({
  zh: key,
  pinyin: DICT2[key],
  priority: Priority.DICT2,
  length: 2,
}));
