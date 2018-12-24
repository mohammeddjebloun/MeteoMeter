
using Microsoft.EntityFrameworkCore; 
using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks; 
using  MeteoMeter.Backend.Models;
using  MeteoMeter.Backend.DataModels;

namespace MeteoMeter.Backend.Repositories
{ 
    public class AnswerRepository : Repository<Answer>, IAnswerRepository
    { 
		public AnswerRepository(ApplicationDbContext context) : base(context)
        {
        }

        public IQueryable<Answer> GetAllWithReferences()
        { 
            return DbContext.Set<Answer>().Include(m=>m.AnsweredBy).Include(m=>m.Card).Include(m=>m.Choice).AsNoTracking(); 
        }

		public async Task<Answer> GetByIdWithReferences(int id)
        {
            return await DbContext.Set<Answer>().Include(m=>m.AnsweredBy).Include(m=>m.Card).Include(m=>m.Choice).FirstOrDefaultAsync(p=>p.Id == id);
        }
    } 
}