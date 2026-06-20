# Motion Hub — מדריך התקנה (Windows, חינם)

מדריך צעד-אחר-צעד להעלות סרטון **פעם אחת** ושיתפרסם לפייסבוק + אינסטגרם + טיקטוק,
דרך Postiz שרץ אצלך על המחשב. הכל חינם (רץ רק כשהמחשב דלוק).

> טיפ: עברו על השלבים לפי הסדר. שלבים 1 ו-4 מהירים. שלב 3 (אפליקציות Meta ו-TikTok)
> הוא האיטי ביותר — סבלנות, זה פעם אחת בלבד.

---

## לפני שמתחילים — דרישות (הכל חינם)

- מחשב Windows עם **8GB RAM ומעלה** (הסטאק כולל Elasticsearch + Temporal, צורך זיכרון).
- **עמוד פייסבוק** (Facebook Page) — לא רק פרופיל אישי.
- חשבון **אינסטגרם Business או Creator**, **מקושר לעמוד הפייסבוק**.
  (באפליקציית אינסטגרם: Settings → Account type → Switch to professional account,
  ואז Settings → קישור לעמוד פייסבוק.)
- חשבון מפתח ב-Meta: https://developers.facebook.com
- חשבון מפתח ב-TikTok: https://developers.tiktok.com

---

## שלב 1 — התקנת Docker Desktop

1. הורידו והתקינו **Docker Desktop for Windows**:
   https://www.docker.com/products/docker-desktop/
   (במהלך ההתקנה השאירו מסומן **WSL 2** — זו ברירת המחדל.)
2. הפעילו מחדש את המחשב אם התבקשתם.
3. פתחו את Docker Desktop והמתינו עד שלמטה משמאל הסטטוס ירוק ("Engine running").
4. מומלץ: Settings → Resources → להקצות לפחות **4GB Memory** (אפשר 6GB) ל-Docker.

> איך בודקים שהכל מותקן: פתחו **PowerShell** והריצו `docker --version`.
> אם מודפסת גרסה — מצוין.

---

## שלב 2 — הרצה ראשונה (מקומי בלבד)

1. פתחו **PowerShell** ונווטו לתיקיית הפרויקט:
   ```powershell
   cd "c:\website 2\motion-hub"
   ```
2. הרימו את המערכת:
   ```powershell
   docker compose up -d
   ```
   בפעם הראשונה זה מוריד את כל הרכיבים (כמה דקות). זה תקין.
3. בדקו שהכל עלה:
   ```powershell
   docker compose ps
   ```
   כל השורות צריכות להיות `running` / `healthy`.
4. פתחו בדפדפן: **http://localhost:4007**
5. צרו משתמש (Register) — זה חשבון המנהל שלכם. התחברו.

✅ **הצלחה בשלב 1 של התכנון:** אתם רואים דשבורד ריק של Postiz.

> עצירה והדלקה בכל פעם:
> - לעצור: `docker compose stop`
> - להדליק שוב: `docker compose up -d`
> - לראות לוגים אם משהו נתקע: `docker compose logs -f postiz`

---

## שלב 3 — כתובת אינטרנט קבועה (ngrok) + אפליקציות מפתח

פייסבוק וטיקטוק לא מאשרים התחברות לכתובת `localhost` — צריך כתובת **HTTPS אמיתית**.
נשתמש ב-**ngrok** (יש דומיין חינמי קבוע אחד לכל חשבון).

### 3א. הגדרת ngrok

1. הירשמו בחינם: https://ngrok.com → קבלו **Authtoken** (במסך Your Authtoken).
2. במסך **Domains** של ngrok, צרו את הדומיין הקבוע החינמי שלכם
   (משהו כמו `motion-eliya.ngrok-free.app`).
3. התקינו ngrok ל-Windows (הדרך הקלה, ב-PowerShell):
   ```powershell
   winget install ngrok.ngrok
   ```
4. חברו את הטוקן (פעם אחת):
   ```powershell
   ngrok config add-authtoken <ה-AUTHTOKEN-שלכם>
   ```
5. הריצו את הטאנל (השאירו את החלון פתוח כל עוד אתם עובדים):
   ```powershell
   ngrok http --domain=motion-eliya.ngrok-free.app 4007
   ```
   (החליפו ל-דומיין שלכם.) עכשיו הכתובת `https://motion-eliya.ngrok-free.app`
   מצביעה על ה-Postiz המקומי שלכם.

### 3ב. עדכון הכתובות בקובץ

פתחו את `docker-compose.yaml`, ושנו את **שלוש** השורות האלה לכתובת ngrok שלכם:

```yaml
MAIN_URL: 'https://motion-eliya.ngrok-free.app'
FRONTEND_URL: 'https://motion-eliya.ngrok-free.app'
NEXT_PUBLIC_BACKEND_URL: 'https://motion-eliya.ngrok-free.app/api'
```

שמרו, ואז הפעילו מחדש:
```powershell
docker compose up -d
```
מעכשיו תיכנסו ל-Postiz דרך כתובת ה-ngrok (לא localhost) כדי שההתחברות לפלטפורמות תעבוד.

### 3ג. אפליקציית Meta (מכסה גם פייסבוק וגם אינסטגרם)

1. https://developers.facebook.com → **My Apps** → **Create App**.
2. בחרו סוג **Business**. תנו שם (למשל "Motion Hub").
3. הוסיפו את המוצר **Facebook Login** → Settings, ובשדה
   **Valid OAuth Redirect URIs** הדביקו את שתי הכתובות (עם הדומיין שלכם):
   ```
   https://motion-eliya.ngrok-free.app/integrations/social/facebook
   https://motion-eliya.ngrok-free.app/integrations/social/instagram
   ```
4. הוסיפו גם את המוצר **Instagram** (Instagram Graph API).
5. במסך **App settings → Basic** העתיקו את **App ID** ואת **App Secret**.
6. הדביקו אותם בקובץ `docker-compose.yaml`:
   ```yaml
   FACEBOOK_APP_ID: 'ה-App-ID-שלכם'
   FACEBOOK_APP_SECRET: 'ה-App-Secret-שלכם'
   ```

> הערה: כל עוד האפליקציה ב-Meta במצב **Development**, אפשר להתחבר ולפרסם
> **לחשבונות שלכם עצמכם** מיד — וזה בדיוק מה שצריך. אישור מלא (App Review)
> דרוש רק אם תרצו לחבר חשבונות של אנשים אחרים.

### 3ד. אפליקציית TikTok

1. https://developers.tiktok.com → **Manage apps** → **Connect an app**.
2. תנו שם (למשל "Motion Hub").
3. הוסיפו את המוצר **Login Kit** ואת **Content Posting API**.
4. ב-**Redirect URI** הוסיפו (עם הדומיין שלכם, חובה HTTPS):
   ```
   https://motion-eliya.ngrok-free.app/integrations/social/tiktok
   ```
5. העתיקו את **Client Key** ו-**Client Secret** והדביקו בקובץ:
   ```yaml
   TIKTOK_CLIENT_ID: 'ה-Client-Key-שלכם'
   TIKTOK_CLIENT_SECRET: 'ה-Client-Secret-שלכם'
   ```

שמרו את הקובץ והפעילו מחדש:
```powershell
docker compose up -d
```

✅ **הצלחה בשלב 2 של התכנון:** המפתחות נטענו, אין שגיאות בהפעלה.

---

## שלב 4 — חיבור הערוצים ובדיקת פרסום אמיתי

1. בדפדפן, היכנסו ל-Postiz דרך כתובת ה-ngrok.
2. **Add Channel** → בחרו **Facebook** → התחברו ואשרו את ההרשאות → בחרו את העמוד.
3. חזרו על זה עבור **Instagram** ועבור **TikTok**.
4. צרו פוסט חדש: העלו **סרטון בדיקה אחד**, כתבו כיתוב, וסמנו את שלושת הערוצים.
5. לחצו **Post** (או תזמנו לזמן מסוים).

✅ **הצלחה (יעד סופי):** אותו סרטון מופיע בפועל בעמוד הפייסבוק, באינסטגרם ובטיקטוק.

> טיקטוק: עד שהאפליקציה מאושרת במלואה, ייתכן שהסרטון יעלה כ**טיוטה/פרטי**.
> זה נורמלי בשלב הפיתוח.

---

## שימוש יומיומי

1. ודאו ש-Docker Desktop רץ.
2. אם צריך להתחבר לפלטפורמות/לפרסם מבחוץ — הריצו את חלון ה-ngrok.
3. היכנסו ל-Postiz → צרו פוסט → העלו סרטון → סמנו את כל הערוצים → פרסמו.

---

## פתרון תקלות

- **Postiz לא נפתח ב-localhost:4007** → `docker compose ps` לבדוק שהכל running;
  `docker compose logs -f postiz` לראות שגיאות.
- **ההתחברות לפייסבוק/טיקטוק נכשלת** → כמעט תמיד אי-התאמה ב-Redirect URI.
  ודאו שהכתובת באפליקציה זהה **בדיוק** לכתובת ngrok + `/integrations/social/<פלטפורמה>`,
  ושנכנסתם ל-Postiz דרך כתובת ה-ngrok ולא localhost.
- **אינסטגרם לא מתחבר** → החשבון חייב להיות Business/Creator ומקושר לעמוד פייסבוק.
- **הכל איטי / נתקע** → הגדילו זיכרון ל-Docker (Settings → Resources → Memory).
- **שינוי כתובת ngrok** → אם הדומיין השתנה, עדכנו שוב את 3 כתובות ה-URL בקובץ,
  את ה-Redirect URIs באפליקציות, והפעילו `docker compose up -d`.
