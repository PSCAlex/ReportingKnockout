using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ReportingKnockout.Controllers
{
    public class ReportingController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult GetEmployeeColumns()
        {
            return Json(new string[] { "First Name", "Last Name", "Address1", "Username", "Email", "Telephone",  });
        }

        public IActionResult GetDataCodeColumns()
        {
            return Json(new string[] { "Code", "Description", "Payment or Deduction"});
        }

        public IActionResult GetAbsenseColumns()
        {
            return Json(new string[] { "Duration", "Cost" });
        }

        public IActionResult Submit(string columns)
        {
            return Json(columns);
        }
    }
}